let imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"]; // array con todas las imagenes que utilizamos de la carpeta

let contador = 0; // el contador nos ayuda a ver en que imagen vamos y luego con ello podremos usar los botones de adelante y atras.

function carrousel(contenedor){ // como variable contiene el contenedor de html donde se encuentra la caja que se va a air moviendo las imagenes

    contenedor.addEventListener('click', e => {

        let atras = contenedor.querySelector('.atras'), // captura el evento del boton atras
            adelante = contenedor.querySelector(".adelante"), // captura el elemnto del boton adelante
            img = contenedor.querySelector("img"), // captura el evento de la caja de img
            tar = e.target;


        if(tar == atras){ // evalua si se toca el boton de atras
            if(contador > 0){
                img.src = imagenes[contador - 1]; // es menos 1 porque debe ir hacia atras es decir la imagen anterior en el indice del array
                contador--;
            }else{ // el else es para que la vuelta a tras no sea infinita
                img.src = imagenes[imagenes.length - 1]; // devuelve la ultima imagen del array
                contador = imagenes.length - 1
            }
        } else if(tar == adelante){
            if(contador < imagenes.length - 1 ){ // evalua si la condicion coincide con que el contador sea menor a la ultima imagen del array de imagenes
                img.src = imagenes[contador + 1]; // es mas 1 porque debe ir al indice que le sigue en el array de imagenes
                contador++;
            }else{ // el else es para que la vuelta adelante no sea infinita
                img.src = imagenes[0]; // devuelve la primera imagen del array
                contador = 0
            }
        }

    });

}

document.addEventListener("ContenidoDOMCargado", () => {
    let contenedor = document.querySelector(".contenedor");

    carrousel(contenedor);
})