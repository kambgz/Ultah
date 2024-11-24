const music = document.getElementById('birthday-music');

// Fungsi untuk memuat audio lokal
function loadLocalAudio(event) {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    music.src = fileURL;
    music.play();
    alert('Audio lokal berhasil dimuat dan diputar!');
  } else {
    alert('Gagal memuat audio. Silakan pilih file lagi.');
  }
}
