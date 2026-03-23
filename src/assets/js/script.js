document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado!');
});


const fim = new Date().getTime() + (8 * 60 * 60 * 1000);

function atualizar() {
    const agora = new Date().getTime();
    const distancia = fim - agora;

    const horas = Math.floor(distancia / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');

    if (distancia < 0) {
        clearInterval(timer);
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
    }
}

const timer = setInterval(atualizar, 1000);
atualizar();


(function () {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    const overlay = document.getElementById('overlay');
    const linksM = document.querySelectorAll('.link-mobile');

    function toggleMenu(force) {
        const aberto = typeof force === 'boolean' ? force: !hamburger.classList.contains('ativo');

        hamburger.classList.toggle('ativo', aberto);
        navMobile.classList.toggle('aberto', aberto);
        overlay.classList.toggle('visivel', aberto);

        hamburger.setAttribute('aria-expanded', aberto);
        navMobile.setAttribute('aria-hidden', !aberto);
        document.body.style.overflow = aberto ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu(false));
    linksM.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
    document.addEventListener('keydown', (e) => {if (e.key === 'Escape') toggleMenu(false);});
    window.addEventListener('resize', () => {if (window.innerWidth > 900) toggleMenu(false);});
})();

function comprar () {
    alert('A Loja Está em Desenvolvimento!')
}