function mostrarContenido(idDelTramite){debugger;
    document.getElementById("tramite-principal").style = "display:none";
    document.getElementsByClassName("oculto")[0].style = "display:none";
    document.getElementsByClassName("oculto")[1].style = "display:none";
    document.getElementsByClassName("oculto")[2].style = "display:none";
    document.getElementsByClassName("oculto")[3].style = "display:none";
    document.getElementsByClassName("oculto")[4].style = "display:none";
    document.getElementsByClassName("oculto")[5].style = "display:none";
    document.getElementsByClassName("oculto")[6].style = "display:none";
    document.getElementsByClassName("oculto")[7].style = "display:none";

    document.getElementById(idDelTramite).style = "display:block";
}