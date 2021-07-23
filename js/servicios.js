/*se enlaza con servicios.html*/
var parrafos = document.getElementsByTagName("p");

for(var i=4; i<parrafos.length-1;i++){
    var parrafo = parrafos[i];
    parrafo.style.fontWeight="bold"
    parrafo.style.color="#706262"
    parrafo.style.textShadow="1px 1px  white, -1px -1px rgb(49, 48, 48)"
    parrafo.style.margin="0"
    parrafo.style.letterSpacing="1px"
    parrafo.style.paddingLeft="10px"
    parrafo.style.paddingBottom="2px"
    parrafo.style.marginLeft="10px"  
  
}

