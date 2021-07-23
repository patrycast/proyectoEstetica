
function grabar(){
    var boton=document.getElementById('grabar')
    boton.addEventListener('click', nuevaNota)
    mostrarNota()
}

function nuevaNota(){
    var clave=document.getElementById('clave').value
    var seleccion=document.getElementById('seleccion').value
    var date=document.getElementById('date').value
    var notas=document.getElementById('notas').value

var valores = [seleccion, date, notas]
localStorage.setItem(clave,valores)
mostrarNota()
}

function mostrarNota(){
    var caja = document.getElementById('mostrarDatos')
    caja.innerHTML='<p id="btn"><button onclick="borrar()"> Borrar Todo</button></p>'
   
    for(var i=0; i<localStorage.length; i++){
        var id = localStorage.key(i)
        var valor = localStorage.getItem(id)
        caja.innerHTML+='<p>'+id+' - '+valor+'</p><hr>'

    }  
   
  

} 

function borrar(){
    localStorage.clear()
    location.reload()
    alert('Nota Borrada')
}



window.addEventListener('load',grabar)

