
document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form);

    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    
    const username = document.getElementById('username');  
    var nameRegex = /^[a-zA-Z0-9]+$/;
    const password = document.getElementById('password');    
    window.alert("está funcionando")
    
    if (!checkAddress())return ;

    if (username.value.length < 10 || username.value.length > 20 ){
        setWrongInput(username,'La longitud debe estar entre 10 y 20 carácteres');
        return ;
        
    } else if (username.value.match(nameRegex)==null){
        setWrongInput(username,'El nombre de usuario no debe tener carácteres especiales');
        return ;
    }
    if (!checkPassword() ) return ;
  
    
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
    var re =/^(?=.*[0-9])(?=.*[!#%/&])[a-zA-Z0-9!#%/&]{15,20}$/;
    console.log(password.value);
    if(password.value.match(re)==null ){
    
        setWrongInput(password, 'La contraseña debe contener al menos de uno de estos carácteres especiales #,%,/,& y debe tener entre 15 y 20 carácteres');
        return false;
    } 
    const password2 = document.getElementById('password2');
    
    if (password.value !== password2.value) {
 
        
        setWrongInput(password2,'Las contraseñas deben coincidir');
 
        return false;
    }
    
          
    
    return true;
  }


 

});