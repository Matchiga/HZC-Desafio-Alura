const botaoMenu = document.querySelector('.cabecalho__menu-icon');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});