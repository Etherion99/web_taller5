const inputs = document.querySelectorAll('.form-control, .form-select');

for (let input of inputs) {
    input.addEventListener('focus', (event) => {
        input.parentNode.parentNode.querySelector('label').style.color = '#F44336';
    });

    input.addEventListener('blur', (event) => {
        input.parentNode.parentNode.querySelector('label').style.color = 'black';
    });
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(formData);
});