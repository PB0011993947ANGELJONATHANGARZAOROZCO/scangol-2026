// Lista de videos del reproductor
const videoPlaylist = [
  "assets/videos/colombia-japan.mp4",
  "assets/videos/england-iran.mp4",
  "assets/videos/jordan-qatara.mp4",
  "assets/videos/morocco-koreas.mp4"
];

let currentVideoIndex = 0;
let activeFilter = "none";


// Mostrar reproductor
window.showVideo = function() {

  if (window.hideAll) window.hideAll();

  const videoBox = document.getElementById("videoBox");
  const player = document.getElementById("videoPlayer");

  currentVideoIndex = 0;

  player.src = videoPlaylist[currentVideoIndex];

  player.style.filter = "none";
  activeFilter = "none";

  videoBox.style.display = "block";

  player.play();
};


// Video siguiente
window.nextVideo = function() {

  const player = document.getElementById("videoPlayer");

  currentVideoIndex++;

  if (currentVideoIndex >= videoPlaylist.length) {
    currentVideoIndex = 0;
  }

  player.src = videoPlaylist[currentVideoIndex];

  player.style.filter = "none";
  activeFilter = "none";

  player.play();
};


// Video anterior
window.prevVideo = function() {

  const player = document.getElementById("videoPlayer");

  currentVideoIndex--;

  if (currentVideoIndex < 0) {
    currentVideoIndex = videoPlaylist.length - 1;
  }

  player.src = videoPlaylist[currentVideoIndex];

  player.style.filter = "none";
  activeFilter = "none";

  player.play();
};


// Play / pausa
window.togglePlayPause = function() {

  const p = document.getElementById("videoPlayer");

  if (!p) return;

  if (p.paused) {
    p.play();
  } else {
    p.pause();
  }

};


// Blur
window.applyFilter1 = function() {

  const p = document.getElementById("videoPlayer");
  if (!p) return;

  if (activeFilter === "blur") {
    p.style.filter = "none";
    activeFilter = "none";
  } else {
    p.style.filter = "blur(1px)";
    activeFilter = "blur";
  }

};


// Alta saturación
window.applyFilter2 = function() {

  const p = document.getElementById("videoPlayer");
  if (!p) return;

  if (activeFilter === "saturate") {
    p.style.filter = "none";
    activeFilter = "none";
  } else {
    p.style.filter = "saturate(200%)";
    activeFilter = "saturate";
  }

};


// Bajo contraste
window.applyFilter3 = function() {

  const p = document.getElementById("videoPlayer");
  if (!p) return;

  if (activeFilter === "contrast") {
    p.style.filter = "none";
    activeFilter = "none";
  } else {
    p.style.filter = "contrast(60%)";
    activeFilter = "contrast";
  }

};


// Cerrar reproductor
window.closeVideo = function() {

  const vb = document.getElementById("videoBox");
  const p = document.getElementById("videoPlayer");

  if (vb) vb.style.display = "none";

  if (p) p.pause();

};