function playSonidoClap() {
    document.getElementById('sonido_tecla_pom').play();
}

document.querySelector(".tecla_pom").onClick = playSonidoClap();