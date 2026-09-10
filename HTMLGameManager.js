console.log('htmlGM connected')

var loadedGame = document.createElement('script');
loadedGame.src = sessionStorage.getItem("loadedGame") != null ?sessionStorage.getItem('loadedGame') : 'Games/Pong.js';
document.head.appendChild(loadedGame);

function loadNewGame(fileName) {
    sessionStorage.setItem('loadedGame', fileName);
    location.reload();
}