let menuVisible= false;
 //funcion que oculta o muestra menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList= "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion de las animaciones de la seccion habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("php");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("laravel");
        habilidades[5].classList.add("adobe");
        habilidades[6].classList.add("canva");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("presion");
    }
}


window.onscroll = function(){
    efectoHabilidades();
}