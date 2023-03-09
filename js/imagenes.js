// imagenes: se enlaza con servicios.html
const variasImagenes=[]
variasImagenes[0]=['imagenes/gabinete.webp']
variasImagenes[1]=['imagenes/imagen37.webp']
variasImagenes[2]=['imagenes/imagen41.webp']
variasImagenes[3]=['imagenes/imagen39.webp']


const imagenes=document.getElementById('imagen')
imagenes.src=variasImagenes[0][0]

let indice=0;

function mostrarImagenes(){
    indice++
    if (indice>3){
        indice=0;
    }
    imagenes.src=variasImagenes[indice][0]
}
setInterval(mostrarImagenes,1500)
