const hamButton2 = document.querySelector('#submenu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton2.classList.toggle('open');
});