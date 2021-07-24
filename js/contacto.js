/*se enlaza con contacto.html*/
 var elemento1=document.getElementById('fondo-de-imagen')
 elemento1.style.fontSize="40px"
 elemento1.style.color="#fff"
 elemento1.style.fontWeight="bold"
 elemento1.style.paddingLeft="40px"
 elemento1.style.paddingTop="90px"

var descuento=prompt('Selecciona el tipo de descuento que deseas obtener: CORPORAL/FACIAL/APARATOLOGIA')
    descuento=descuento.toLowerCase();
    if(descuento=='corporal'){
        elemento1.innerHTML='<p> Tratamiento '+descuento + ': Obtenes un descuento del 10% antes del 12/2021</p>'
    }
    else if(descuento=='facial'){
        elemento1.innerHTML='<p> Tratamiento '+descuento + ': Obtenes un descuento del 15% antes del 12/2021</p>'
    }
    else if(descuento=='aparatologia'){
        elemento1.innerHTML='<p> Tratamiento '+descuento +': Obtenes un descuento del 20% antes del 12/2021</p>'   
    } 
    else{
        elemento1.innerHTML='<p>Ingrese una opcion valida por favor<p>'
    }
