function playMusic() {
  const music = document.getElementById('birthday-music');
  if (music.paused) {
    music.play();
    alert('Musik dimulai, Selamat menikmati 🎉');
  } else {
    music.pause();
    alert('Musik dihentikan');
  }
}
