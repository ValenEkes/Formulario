document.addEventListener('DOMContentLoaded',function(){
    let Nombre=document.getElementById('nombre')
    let Email=document.getElementById('Mail')
    let MensajeError=document.getElementById('Incorrecto')
    let Contraseña=document.getElementById("Contrasena")
    let ContraseñaConfirmar=document.getElementById("contrasenaBien")
    let Error1=document.getElementById('ErrorCaracter')
    let Error2=document.getElementById('ErrorNum')
    let Error3=document.getElementById('ErrorLetra')
    let Error4=document.getElementById('ErrorContrasena')
    let ErrorEmail=document.getElementById('ErrorMail')
    let Texto=document.getElementById('Enviado')
    let letras=/[A-Za-z]/
    let numeros=/\d/
    let formatoEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    Nombre.addEventListener('input', function(){
    if(Nombre.value.length<3) {
    MensajeError.textContent = "Por favor, escriba más de tres caracteres."
    MensajeError.style.color="red"
}
    else{
    MensajeError.textContent=""    
    }
    })
   
    Contraseña.addEventListener('input',function(){
    if(Contraseña.value.length>=8){
    Error1.textContent=""
    }
    else{
    Error1.textContent="Minimo 8 caracteres"
    Error1.style.color="red"   
    }
    if(letras.test(Contraseña.value)){
        Error2.textContent=""
        }
        else{
        Error2.textContent="Minimo una letra"   
        Error2.style.color="red" 
        }
        if(numeros.test(Contraseña.value)){
            Error3.textContent=""
            }
            else{
            Error3.textContent="Minimo un numero"
            Error3.style.color="red"           
         } 
        })   
    ContraseñaConfirmar.addEventListener('input',function(){
     if(Contraseña.value===ContraseñaConfirmar.value){
        Error4.textContent=""
     }   
     else{
        Error4.textContent="Porfavor escribir la misma contraseña"
        Error4.style.color="red"
     }
    })
    function validacionBoton(event){
        let valido=true
    
    if(Nombre.value.length < 3){
    MensajeError.textContent = "Por favor, escriba más de tres caracteres."
    valido=false
    }
    
    if(!formatoEmail.test(Email.value)){
        ErrorEmail.textContent="formato invalido"
        valido=false
    }
    else{
        ErrorEmail.textContent=""
    }
    if (Contraseña.value.length < 8) {
        Error1.textContent = "Mínimo 8 caracteres.";
        valido = false;
    }
    
    if (!letras.test(Contraseña.value)) {
        Error2.textContent = "Debe contener al menos una letra.";
        valido = false;
    }
    
    if (!numeros.test(Contraseña.value)) {
        Error3.textContent = "Debe contener al menos un número.";
        valido = false;
    }
    if (Contraseña.value !== ContraseñaConfirmar.value) {
        Error4.textContent = "Las contraseñas no coinciden.";
        valido = false;
    }
    if (!valido) {
        event.preventDefault();
    }
    else{
    Texto.textContent="Formulario enviado"
    }
    }  
    document.getElementById("formulario").addEventListener("submit", validacionBoton);
   })   
