const mainScreen = document.querySelector('.main-content');
const buttonRegister = document.querySelector('.button-register');
const successScreen = document.querySelector('.success');
const buttonBack = document.querySelector('.button-back');

const screenToggle = (event) => {
    event.preventDefault();
    successScreen.classList.toggle('active');
    mainScreen.classList.toggle('active');
};

buttonRegister.addEventListener('click', screenToggle);
buttonBack.addEventListener('click', screenToggle);
