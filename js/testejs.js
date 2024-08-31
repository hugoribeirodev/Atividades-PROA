function show_camada1(){ //mostra a camada ao passar o mouse em cima//
    document.getElementById("camada1").style.visibility="visible"; //pegou a camada1 e deixou visivel//
    document.getElementById("camada2").style.visibility="hidden"; //e hidden some com todos os outros//
    document.getElementById("camada3").style.visibility="hidden";
}

function show_camada2(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="visible";
    document.getElementById("camada3").style.visibility="hidden";
}

function show_camada3(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="visible";
}

function some_tudo(){ //sumiu com tudo depois de tirar o mouse //
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
    document.getElementById("camada3").style.visibility="hidden";
}