const video = document.querySelector('#video')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const progress = document.querySelector('#progress')
const time = document.querySelector('#timestamp')

function playVideo() {
  video.play()
}
function stopVideo() {
  video.pause();
  time.innerText = 0;
}
function progressBar(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`
}

play.addEventListener('click', playVideo)
stop.addEventListener('click', stopVideo)
progress.addEventListener('timeupdate', progressBar)