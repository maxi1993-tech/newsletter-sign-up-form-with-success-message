const form = document.querySelector('.sign-up-form');
const input = document.querySelector('.form-input');
const signUp = document.querySelector('.container-sign-up');
const success = document.querySelector('.container-success');
const userEmail = document.querySelector('.email-bold');
const successButton = document.querySelector('.success-button');
const emailError = document.querySelector('#email-error')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = input.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(emailValue);

    if (!isValid) {
        input.classList.add('form-input--error');
        emailError.style.display = 'block';
    } else {
        input.classList.remove('form-input--error');
        signUp.classList.add('hidden');
        success.classList.remove('hidden')
        emailError.style.display = 'none';

        userEmail.textContent = emailValue;
        success.setAttribute('aria-hidden', 'false');
        signUp.setAttribute('aria-hidden', 'true');
    }
});

successButton.addEventListener('click', () => {

        signUp.classList.remove('hidden');
        success.classList.add('hidden');

        success.setAttribute('aria-hidden', 'true');
        signUp.setAttribute('aria-hidden', 'false');
    
});
