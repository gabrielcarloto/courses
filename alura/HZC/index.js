const menuButton = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
});