document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado!');
});


// Define até quando vai a oferta (aqui: 8 horas a partir de agora)
const fim = new Date().getTime() + (8 * 60 * 60 * 1000);

function atualizar() {
    const agora = new Date().getTime();
    const distancia = fim - agora;

    // Calcula horas, minutos e segundos
    const horas = Math.floor(distancia / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Atualiza o HTML com zero à esquerda (ex: 08, 04)
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');

    // Quando chegar a zero
    if (distancia < 0) {
        clearInterval(timer);
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
    }
}

// Roda a função a cada 1 segundo
const timer = setInterval(atualizar, 1000);
atualizar(); // roda imediatamente pra não esperar 1 seg