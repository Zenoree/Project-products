document.getElementById("registrationForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const jenisKelamin = document.getElementById("jenisKelamin").value;
  const emailUser = document.getElementById("emailUser").value;

  try{
    const response = await axios.post('http://localhost:3000/register', {
        name,
        password,
        tanggalLahir,
        jenisKelamin,
        emailUser
    });
    if(response.status ===200){
        console.log('Register berhasil');
        alert('Register berhasil');
        window.location.href = "/";
    }else{
        console.log('Register gagal');
        alert('Registrasi gagal')
    }
  }catch(error){
    console.error("Terjadi kesalahan", error.message);
    alert("Terjadi kesalahan saat melakukan registrasi Name atau Email ada yang sama")
  }
});
