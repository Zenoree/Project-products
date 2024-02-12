document.getElementById("submitbarang").addEventListener("submit", async function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("NamaBarang");
  const stokInput = document.getElementById("jumlahbarang");
  const hargaInput = document.getElementById("Harga");
  const categoryInput = document.getElementById("category");
  const fileInput = document.getElementById("file");

  const name = nameInput.value;
  const stok = stokInput.value;
  const harga = hargaInput.value;
  const category = categoryInput.value;
  const files = fileInput.files[0];
  const formData = new FormData();
  formData.append("name", name);
  formData.append("stok", stok);
  formData.append("harga", harga);
  formData.append("category", category);
  formData.append("file", files);

  try {
    const response = await axios.post("http://localhost:3000/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) {
      console.log("Tambah Barang berhasil");
      alert("Tambah Barang berhasil");

      nameInput.value = "";
      stokInput.value = "";
      hargaInput.value = "";
      categoryInput.value = "";
      fileInput.value=""
    } else {
      console.log("Tambah Barang gagal");
      alert("Tambah barang gagal");
    }
  } catch (error) {
    console.error("Terjadi kesalahan", error);
    alert("Terjadi kesalahan saat melakukan Input Barang" + error.message);
  }
});
