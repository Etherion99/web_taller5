

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    const username = document.getElementById('username');  
    const password = document.getElementById('password');    

    validation(
        username, [formObj['username'] == '', formObj['username'].length > 20, formObj['username'].length < 10], ['Campo obligatorio', 'Longitud máxima: 20', 'Longitud minima : 10']
    );
    validation(
        password, [formObj['password'] == '', formObj['password'].length > 25, formObj['password'].length < 15], ['Campo obligatorio', 'Longitud máxima: 25', 'Longitud minima : 15']
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

function checkPassword(str)
  {          
    var re =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#-%-/-&]).{15,20}$/;
    return re.test(str);
  }

function verificarPasswords() {
 
    password = document.getElementById('password');
    password2 = document.getElementById('password2');

    if (password.value != password2.value) {
 
        
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        
        document.getElementById("error").classList.remove("mostrar");
 
        
        document.getElementById("ok").classList.remove("ocultar");
 
         
        document.getElementById("registrarse").disabled = true;
 
        
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}