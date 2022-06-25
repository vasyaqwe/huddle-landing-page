const sub = document.querySelector('sub');
const emailInput = document.getElementById('email');
const form = document.querySelector('form');
emailInput.addEventListener('input', checkEmail)

function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.value.match(emailRegex) || emailInput.value.length === 0) {
        sub.innerText = 'Please enter a valid email address';
    } else {
        sub.innerText = '';
    }
};

form.addEventListener('submit', (e) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.value.match(emailRegex) || emailInput.value.length === 0) {
        sub.innerText = 'Please enter a valid email address';
        e.preventDefault()
    } else {
        sub.innerText = '';
    }
})