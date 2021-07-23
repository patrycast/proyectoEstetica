function iniciar1(){
    var elemento=document.getElementById('lienzo1');
    lienzo=elemento.getContext('2d');
    lienzo.fillStyle="#7970f8"
    lienzo.fillRect(0,0,50,30);
    lienzo.strokeStyle='#fff'
    lienzo.moveTo(1,1);
    lienzo.lineTo(20,25);
    lienzo.lineTo(30,25);
    lienzo.lineTo(50,1);
    lienzo.lineWidth=2;
    lienzo.stroke();
} window.addEventListener("load", iniciar1, false);
  
function iniciar2(){
    var elemento=document.getElementById('lienzo2');
    lienzo=elemento.getContext('2d');
    lienzo.fillStyle="#7970f8"
    lienzo.fillRect(0,0,50,30);
    lienzo.strokeStyle='#fff'
    lienzo.lineTo(0,0);
    lienzo.lineTo(50,15);
    lienzo.lineTo(0,30);
    lienzo.lineTo(20,15);
    lienzo.lineTo(0,0);
    lienzo.lineWidth=2;
    lienzo.stroke();
} window.addEventListener("load", iniciar2, false);

function iniciar3(){
    var elemento=document.getElementById('lienzo3');
    lienzo=elemento.getContext('2d');
    lienzo.fillStyle="#7970f8"
    lienzo.strokeStyle='#fff'
    lienzo.fillRect(0,0,50,30);    
    lienzo.moveTo(2,15);
    lienzo.lineTo(2,5);
    lienzo.lineTo(25,5);
    lienzo.lineTo(5,28);
    lienzo.lineTo(40,28);
    lienzo.lineTo(25,5);
    lienzo.lineTo(48,5);
    lienzo.lineTo(48,15); 
    lienzo.lineWidth=2;
    lienzo.stroke();
} window.addEventListener("load", iniciar3, false);



