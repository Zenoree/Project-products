document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetPage = link.getAttribute("href");
      navigateToPage(targetPage);
    });
  });
  function navigateToPage(page) {
    window.location.href = page;
  }
});
let nilai = 0 
function updateNilai() {
  document.getElementById(jumlahbarang).value = total;
}
document.getElementById("tambah").addEventListener("click", () => {
  let inputjumlah = document.getElementById("jumlahbarang");
  let nilai = parseInt(inputjumlah.value);
  if (nilai < 30) {
    inputjumlah.value = nilai + 1;
    updateNilai();
  }
});
document.getElementById("kurang").addEventListener("click", () => {
  let inputjumlah = document.getElementById("jumlahbarang");
  let nilai = parseInt(inputjumlah.value);
  if (nilai > 0) {
    inputjumlah.value = nilai - 1;
    updateNilai();
  }
});

function updateNilai() {
  document.getElementById("jumlahbarang").value = parseInt(document.getElementById("jumlahbarang").value);
}
