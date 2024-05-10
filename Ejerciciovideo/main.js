var vid;

window.onload = function() {
    vid = document.getElementById("myVideo");
}

function playVid() {
    if (vid) {
        vid.play();
    }
}

function pauseVid() {
    if (vid) {
        vid.pause();
    }
}

function cambiar(pelicula) {
    if (vid) {
        vid.src = pelicula;
        vid.load(); // Cargar el nuevo video
    }
}

function toggleMute() {
    if (vid) {
        vid.muted = !vid.muted;
    }
}
