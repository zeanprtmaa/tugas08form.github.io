function validasiform() {
  var nama = document.getElementById("namalengkap").value;
  var email = document.getElementById("email").value;
  var telpon = document.getElementById("telpon").value;
  var tanggallahir = document.getElementById("tanggallahir").value;
  var kabupaten = document.getElementById("kab").value;
  var kecamatan = document.getElementById("kec").value;
  var kelurahan = document.getElementById("kel").value;

  if (nama == "") {
    alert("Nama harus diisi");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Email tidak valid");
    return false;
  }

  if (telpon.length < 10 || telpon.length > 13) {
    alert("Nomor telepon harus memiliki 10-13 karakter");
    return false;
  }

  if (tanggallahir == "") {
    alert("Tanggal lahir harus diisi");
    return false;
  }

  if (kabupaten == "") {
    alert("Kabupaten harus diisi");
    return false;
  }

  if (kecamatan == "") {
    alert("Kecamatan harus diisi");
    return false;
  }

  if (kelurahan == "") {
    alert("Kelurahan harus diisi");
    return false;
  }

  if (confirm("Apakah Anda yakin ingin mengirimkan formulir ini?")) {
    return true;
  } else {
    return false;
  }
}

function confirmReset() {
  if (confirm("Apakah Anda yakin ingin mereset formulir ini?")) {
    return true;
  } else {
    return false;
  }
}
