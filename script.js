document.getElementById('formPelanggan').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaDepan = document.getElementById('nama-depan').value.trim();
    const namaBelakang = document.getElementById('nama-belakang').value.trim();
    const nik = document.getElementById('nik').value.trim();
    const nomor = document.getElementById('nomor').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    const emailIsValid = email.includes('@') && email.includes('.com');

    if (!namaDepan || !namaBelakang || !nik || !nomor || !email || !gender || nik.length !== 16 || !emailIsValid) {
        alert("Pastikan semua field terisi dengan benar");
    } else {
        alert("Submit Berhasil!");
    }
});
