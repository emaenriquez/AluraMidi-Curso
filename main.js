
function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


// document.querySelector('.tecla_pom').onclick = playSonidoPom;

let listaTeclas = document.querySelectorAll('.tecla')
// const listaDeTeclas  = document.querySelectorAll('input[type=button]')

// let contador = 0;

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const intrumento = tecla.classList[1];

    const idAudio = `#sonido_${intrumento}`

    tecla.onclick = function () {
        playSonido(idAudio);
    }

    tecla.onkeyup = function (e) {
        // console.log(e.code)
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('activa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('activa')
    }

}

// while (contador < 9) {
//     const tecla = listaTeclas[contador];
//     const intrumento = tecla.classList[i];

//     const idAudio = `#som_${intrumento}`

//     tecla.onclick = function () {
//         playSonido(idAudio);
//     }
//     contador += 1;
// }