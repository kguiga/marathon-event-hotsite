const dataEvento = new Date("2026-09-19 14:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    const contador = document.getElementById("contador");

    if (contador) {
        contador.innerHTML =
            `${dias} dias ${horas}h ${minutos}m ${segundos}s`;
    }
}

atualizarContador();
setInterval(atualizarContador, 1000);

const imagens = [
    "images/sao-paulo-1.jpg",
    "images/sao-paulo-2.jpg",
    "images/sao-paulo-3.jpg",
    "images/sao-paulo-4.jpg",
    "images/sao-paulo-5.jpg",
    "images/sao-paulo-6.jpg",
    "images/sao-paulo-7.jpg",
    "images/sao-paulo-8.jpg",
];

let posicao = 0;

setInterval(() => {

    const slide = document.getElementById("slide");

    if (slide) {

        posicao++;

        if (posicao >= imagens.length) {
            posicao = 0;
        }

        slide.src = imagens[posicao];
    }

}, 3000);
