// Seleccionamos los elementos del HTML
const audio = document.getElementById("audioPresentacion");
const btnReproducir = document.getElementById("btnReproducir");
const btnPausar = document.getElementById("btnPausar");
const estadoAudio = document.getElementById("estadoAudio");

// Función para reproducir el audio
function reproducirAudio() {
    audio.play();
    estadoAudio.textContent = "Estado: Audio reproduciéndose";
}

// Función para pausar el audio
function pausarAudio() {
    audio.pause();
    estadoAudio.textContent = "Estado: Audio pausado";
}

// Eventos de los botones
btnReproducir.addEventListener("click", reproducirAudio);
btnPausar.addEventListener("click", pausarAudio);

// Evento cuando el audio finaliza
audio.addEventListener("ended", function () {
    estadoAudio.textContent = "Estado: Audio finalizado";
});

// Evento cuando el audio se pausa
audio.addEventListener("pause", function () {
    if (!audio.ended) {
        estadoAudio.textContent = "Estado: Audio pausado";
    }
});

// Evento cuando el audio se reproduce
audio.addEventListener("play", function () {
    estadoAudio.textContent = "Estado: Audio reproduciéndose";
});
