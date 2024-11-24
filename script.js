document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const mainContent = document.getElementById("main-content");
    const openButton = document.getElementById("open-button");
    const music = document.getElementById("background-music");

    openButton.addEventListener("click", () => {
        popup.style.display = "none";
        mainContent.style.display = "block";
        music.play();
    });
});