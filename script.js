//your JS code here. If required.
// script.js
const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const displayTime = document.getElementById('display');
let timer;

function selectSound(sound) {
  audioSource.src = `Sounds/${sound}.mp3`;
  videoPlayer.src = `Videos/${sound}.mp4`;
}

function setTime(minutes) {
  displayTime.innerText = `${minutes}:00`;
}

function updateTimer() {
  const timeArray = displayTime.innerText.split(':');
  let minutes = parseInt(timeArray[0]);
  let seconds = parseInt(timeArray[1]);

  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(timer);
      // Add any additional actions you want to perform when the timer reaches 0.
    }
  }

  displayTime.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    videoPlayer.play();
    timer = setInterval(updateTimer, 1000);
  } else {
    audioPlayer.pause();
    videoPlayer.pause();
    clearInterval(timer);
  }
}
