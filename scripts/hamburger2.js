const hamButton2 = document.querySelector('#submenu');
const navigation2 = document.querySelector('.navigation');
hamButton2.addEventListener('click', () => {
    navigation2.classList.toggle('open');
    hamButton2.classList.toggle('open');
});