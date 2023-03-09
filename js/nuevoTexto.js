/*elemento 3 enlazado en index.html al inicio de la seccion dentro de un div */
const elemento3=document.getElementById('elemento3');
const texto= document.createElement('p');
const contenido=document.createTextNode('Nueva Incorporacion: Depilacion Definitiva hace tu reserva!');
    elemento3.appendChild(contenido);
    elemento3.style.textAlign='center';
    elemento3.style.color="#c03";
    elemento3.style.margin="0";
    elemento3.style.fontSize='22px';
    elemento3.style.fontWeight="bold";
    elemento3.style.textShadow="black 1px 1px 1px";