var video=document.getElementById('mivideo')
var boton_rep=document.getElementById('reproducir')

function reproducir(){
    if(video.paused){
    video.play()
    boton_rep.innerHTML='<span class="icon-pause"></span>'
}else{
    video.pause()
    boton_rep.innerHTML='<span class="icon-play2"></span>'
}
}

function detener(){
    video.pause()
    video.currentTime=0
    boton_rep.innerHTML='<span class="icon-play2"></span>'
}

function saltar(fotogramas){
    video.currentTime +=fotogramas
}

