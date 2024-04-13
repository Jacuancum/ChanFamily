const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const hamButton2 = document.querySelector('#submenu');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});