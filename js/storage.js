
function grabar(){
    let boton=document.getElementById('grabar')
    boton.addEventListener('click', nuevaNota)
    mostrarNota()
}

function nuevaNota(){
    let clave=document.getElementById('clave').value
    let seleccion=document.getElementById('seleccion').value
    let date=document.getElementById('date').value
    let notas=document.getElementById('notas').value

let valores = [seleccion, date, notas]
localStorage.setItem(clave,valores)
mostrarNota()
}

function mostrarNota(){
    let caja = document.getElementById('mostrarDatos')
    caja.innerHTML='<p id="btn"><button onclick="borrar()"> Borrar Todo</button></p>'
   
    for(let i=0; i<localStorage.length; i++){
        let id = localStorage.key(i)
        let valor = localStorage.getItem(id)
        caja.innerHTML+='<p>'+id+' - '+valor+'</p><hr>'
    }    
} 

function borrar(){
    localStorage.clear()
    location.reload()
    alert('Nota Borrada')
}

window.addEventListener('load',grabar)

