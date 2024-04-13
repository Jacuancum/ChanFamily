const hamButton2 = document.querySelector('#submenu');
const navigation2 = document.querySelector('.subnavigation');
hamButton2.addEventListener('click', () => {
    navigation2.classList.toggle('open2');
    hamButton2.classList.toggle('open2');
});