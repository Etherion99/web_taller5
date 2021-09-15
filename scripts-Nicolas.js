
document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form);

    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    
    const username = document.getElementById('username');  
    
    const password = document.getElementById('password');    
 
    
    checkAddress();

    checkUser(username);
    checkPassword();
  
    
});
function checkAddress(){
    const address = document.getElementById('address'); 
    console.log(address.value);
    if(!address.value ){
        
    
        setWrongInput(address, 'La dirección no puede estar vacia')
        return false;
    } 
    for(const prefix of ['cll','cra','av','anv','trans']){
        console.log(prefix)
        if(address.value.startsWith(prefix)){
            removeWrongInput(address);
            return true;
        }
    }
    setWrongInput(address, 'La dirección debe empezar por cll, cra, av, anv, trans')
    
    return false;
}

function checkUser(input){
    var nameRegex = /^[a-zA-Z0-9]+$/;
    if (input.value.length < 10 || input.value.length > 20 ){
        setWrongInput(input,'La longitud debe estar entre 10 y 20 carácteres');
        return;
        
    } else if (input.value.match(nameRegex)==null){
        setWrongInput(input,'El nombre de usuario no debe tener carácteres especiales');
        return ;
    }
    removeWrongInput(input);
}

function setWrongInput(input, messages) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.parentNode.querySelector('.invalid-feedback').innerText = messages;
}
function removeWrongInput(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.parentNode.querySelector('.invalid-feedback').innerText = '';
}

function checkPassword()
  {  
    
    const password = document.getElementById('password'); 
    var re =/^(?=.*[0-9])(?=.*[!#%/&])(?=.*[A-Z])[a-zA-Z0-9!#%/&]{15,20}$/;
    console.log(password.value);
    if(password.value.match(re)==null ){
    
        setWrongInput(password, 'La contraseña debe contener al menos de uno de estos carácteres especiales #,%,/,& y debe tener entre 15 y 20 carácteres');
        return false;
    } 
    const password2 = document.getElementById('password2');
    console.log(password2.value);
    if (password.value !== password2.value) {
 
        
        setWrongInput(password2,'Las contraseñas deben coincidir');
        
        return false;
    }
    
          
    removeWrongInput(password);
    removeWrongInput(password2);
    return true;
  }


 

});
