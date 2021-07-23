// imagenes: se enlaza con servicios.html
var variasImagenes=[]
variasImagenes[0]=['imagenes/gabinete.jpg']
variasImagenes[1]=['imagenes/imagen37.jpg']
variasImagenes[2]=['imagenes/imagen41.jpg']
variasImagenes[3]=['imagenes/imagen39.jpg']


var imagenes=document.getElementById('imagen')
imagenes.src=variasImagenes[0][0]

var indice=0;

function mostrarImagenes(){
    indice++
    if (indice>3){
        indice=0;
    }
    imagenes.src=variasImagenes[indice][0]
}
setInterval(mostrarImagenes,2000)