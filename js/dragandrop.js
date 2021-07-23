function iniciar(){
    origen1=document.getElementById('img-presu');
    origen1.addEventListener('dragstart', arrastrado);

    destino=document.getElementById('caja-soltar');
    destino.addEventListener('dragenter', function(e){
    e.preventDefault(); });
    destino.addEventListener('dragover', function(e){
    e.preventDefault(); });
    destino.addEventListener('drop', soltado);
    } 
    function arrastrado(e){
    var codigo='<img src="'+origen1.getAttribute('src')+'">';
    e.dataTransfer.setData('Text', codigo);
    } 
    function soltado(e){
    e.preventDefault();
    destino.innerHTML=e.dataTransfer.getData('Text')
    } window.addEventListener('load', iniciar);