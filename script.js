// Function to close the popup and play music
function closePopup() {
  const popup = document.getElementById('popup');
  const music = document.getElementById('birthday-music');
  
  // Hide the popup
  popup.style.display = 'none';

  // Play the music
  music.play();
}