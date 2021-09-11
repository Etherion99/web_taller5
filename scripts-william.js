/* El campo email debe estar lleno y debe tener una longitud de máximo 120 
caracteres. Si no es así debe indicarle al usuario */

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    const email = document.getElementById('email');    

    validation(
        email, [formObj['email'] == '', formObj['email'].length > 120], ['Campo obligatorio', 'Longitud máxima: 25']
    );
    
});

function validation(input, conditions, messages) {
    for (let i in conditions) {
        let condition = conditions[i];

        if (condition) {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            input.parentNode.querySelector('.invalid-feedback').innerText = messages[i];
            break;
        } else {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            input.parentNode.querySelector('.invalid-feedback').innerText = '';
        }
    }
}

/*Crear una sección de registro de gustos la cual se tendrá que habilitar cuando el 
usuario seleccione en un input type="radio" , el cual debe contener como 
 color favorito, marca de carro favorita, estilo de carro favorito, y una que les diga 
el modelo de carro que mas le gusta.*/

//Llamar al html
const radio =  document.getElementById('radio');
const noradio = document.getElementById('noradio');
let tst = document.getElementById('gustos');
tst.style.display = "none";

function showTastes() {
    var x = document.getElementById("gustos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
}

function noshowTastes(){
    var x = document.getElementById("gustos");
    if (x.style.display != "none") {
        x.style.display = "none";
    } 
}


function updateValuemin(input)
{
    document.getElementById('minCost').value = input;
}

function updateValuemax(input)
{
    document.getElementById('maxCost').value = input;
}