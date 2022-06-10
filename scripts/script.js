/** Selecting elements*/
const form = document.querySelector('.form');
const inputFullname = document.querySelector('#fullname');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputPhone = document.querySelector('#phone');
const inputBirthday = document.querySelector('#birthday');
const mainScreen = document.querySelector('.main-content');
const buttonRegister = document.querySelector('.button-register');
const successScreen = document.querySelector('.success');
const buttonBack = document.querySelector('.button-back');

/* Wraps the phone in the desired layout */
const phoneMask = (event) => {
    const digit = event.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    event.target.value = !digit[2]
        ? digit[1]
        : '(' + digit[1] + ') ' + digit[2] + (digit[3] ? '-' + digit[3] : '');
};

/** Insert form input values on local storage */
const insertLocalStorage = () => {
    const data = {
        fullname: inputFullname.value,
        email: inputEmail.value,
        password: inputPassword.value,
        phone: inputPhone.value,
        birthday: inputBirthday.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
};

/* Get values from local storage */
const getLocalStorage = () => {
    if (localStorage.getItem('data')) {
        const {fullname, email, password, phone, birthday} = JSON.parse(
            localStorage.getItem('data'),
        );
        inputFullname.value = fullname;
        inputEmail.value = email;
        inputPassword.value = password;
        inputPhone.value = phone;
        inputBirthday.value = birthday;
    }
};

/* Make the screen change between form page and succes page */
const screenToggle = () => {
    successScreen.classList.toggle('active');
    mainScreen.classList.toggle('active');
};

/* Calls another functions */
const handleSubmit = (event) => {
    event.preventDefault();
    insertLocalStorage();
    event.target.reset();
    screenToggle();
};

/* Clears the local storage */
const clearLocalStorage = () => {
    localStorage.clear();
};

window.addEventListener('load', getLocalStorage);

window.addEventListener('beforeunload', insertLocalStorage);

inputPhone.addEventListener('input', phoneMask);

form.addEventListener('submit', handleSubmit);

buttonBack.addEventListener('click', () => {
    clearLocalStorage();
    screenToggle();
});
