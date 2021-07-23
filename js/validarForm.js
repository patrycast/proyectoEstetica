  
 /**validacion de formulario: setCustomValidity() */
 var nombre=document.getElementById('nombre')
 var email=document.getElementById('email')
 var tel=document.getElementById('telefono')

 function validarDatos(){
     nombre.addEventListener('input', validarNombre);
     email.addEventListener('input', validarEmail);
     tel.addEventListener('input', validarTel);
    validarNombre();
    validarEmail(); 
    validarTel(); 
 }

 function validarNombre(){
     if(nombre.value==''){
         nombre.style.backgroundColor="#f07676"
         nombre.setCustomValidity('Ingrese nombre completo por favor');
     } else{
        nombre.style.backgroundColor="#4fa5f5"
        nombre.setCustomValidity('')
     }
 }

 function validarEmail(){
    if(email.value==''){
        email.style.backgroundColor="#f07676"
        email.setCustomValidity('Formato de Email valido: correo@ejemplo.com');
    } 
    else{
       email.style.backgroundColor="#4fa5f5"
       email.setCustomValidity('')
    }
}

function validarTel(){
    if(tel.value==''){
        tel.style.backgroundColor="#f07676"
        tel.setCustomValidity('Ingrese un telefono valido por favor');
    }
    else if(isNaN(tel.value)){
        tel.style.backgroundColor="#f07676"
        tel.setCustomValidity('Solo puede contener numero');
    }
    else{
       tel.style.backgroundColor="#4fa5f5"
       tel.setCustomValidity('')
    }
}

 window.addEventListener('load', validarDatos)

/*validacion de formulario: checkValidity()*/ 

function enviar(){
    var boton=document.getElementById('boton')
    boton.addEventListener('click', enviarFormulario)
}

function enviarFormulario(){
   var formulario=document.getElementById('formulario')
   var valido=formulario.checkValidity()
   if(valido){
       formulario.submit()
       alert('formulario enviado')
   } else{
       alert('El formulario no puede ser enviado')
   }
}

window.addEventListener('load',enviar)



