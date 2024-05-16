// document.addEventListener("DOMContentLoaded", getButtonClass);


function play(sonido){
    document.querySelector(`#sonido_${sonido}`).play();
    console.log(`#sonido_${sonido}`);
}

const lista_de_teclas = document.querySelectorAll(".tecla");

function getButtonClass(){
    let contador = 0;
    while(contador < 9){
        const tecla = lista_de_teclas[contador];
        const idAudio = `${tecla.classList[1]}`;

        tecla.onclick = function (){
            console.log("entro"+contador);
            play(idAudio);
            if(tecla.classList.length > 2){
                tecla.classList.remove("activa");
            }else{
                tecla.classList.add("activa");
            }
        };
        contador++;
    }
}

document.addEventListener("click", getButtonClass);
