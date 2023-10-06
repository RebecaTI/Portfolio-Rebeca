function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    
    const idAudio = `#som_${instrumento}`;  //Template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    console.log(contador);
}  