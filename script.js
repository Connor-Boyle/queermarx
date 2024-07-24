// Simple script to log a message to the console
console.log("Welcome to Fully Automated Luxury Gay Communism!");

let currentTrack = '';
const audioPlayer = document.getElementById('audioPlayer');

function playSong(track) {
    const currentButton = document.querySelector(`button[data-track="${track}"]`);
    const allButtons = document.querySelectorAll('button');

    if (audioPlayer.src.includes(track) && !audioPlayer.paused) {
        audioPlayer.pause();
        currentButton.classList.remove('playing');
    } else {
        audioPlayer.src = `assets/${track}.mp3`;
        audioPlayer.play();
        currentButton.classList.add('playing');
        allButtons.forEach(button => {
            if (button !== currentButton) {
                button.classList.remove('playing');
            }
        });
    }
}
