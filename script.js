function setActive(event) {
    // Menghapus kelas 'active' dari semua tautan navigasi
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Menambahkan kelas 'active' ke tautan yang diklik
    event.target.classList.add('active');
  }
  function showDetails(productName) {
    alert('Anda memilih: ' + productName);
}
function copyPhoneNumber() {
    const phoneNumber = document.getElementById('phone-number').textContent;
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            alert('Nomor telepon disalin: ' + phoneNumber);
        })
        .catch(err => {
            console.error('Gagal menyalin: ', err);
        });
}
function copyPhoneNumber() {
    // Ambil nomor telepon
    const phoneNumber = document.getElementById('phone-number').textContent;

    // Buat elemen input sementara untuk menyalin nomor
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // Menyalin ke clipboard
    document.body.removeChild(tempInput); // Hapus elemen input sementara

    // Umpan balik kepada pengguna
    alert('Nomor telepon disalin: ' + phoneNumber);
}
  