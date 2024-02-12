document.getElementById("loginForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const emailUser = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailUser, password }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data));
      alert("Login berhasil");
      window.location.href = "/";
    } else {
      alert("Email atau kata sandi salah");
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    alert("Terjadi kesalahan saat melakukan login");
    console.log(error);
  }
});
