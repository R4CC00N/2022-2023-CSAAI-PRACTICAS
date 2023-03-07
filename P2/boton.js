//-- Elementos de la gui
const gui = {
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset"),
}
const botones = document.getElementsByClassName("digito")
const display_num = document.getElementById("display_num");

console.log("Ejecuitando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
}

let estado=ESTADO.INIT;
//-- Función de retrollamada de los botones
//-- botones de la clase dígito

// para adivinar el numero tenemos que meter el numero a adivinar en un array
// haremos ifs para ver si el digito esta en la lista cogemos el indice hacemos un pop y escribimos
// cuando la lista este vacia ganamos para el contador y el juego sale un aviso de has ganado
// empezar el juego solo cuando damos start


function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

      display_num.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        display_num.innerHTML += ev.target.value;

        //-- Y nos quedamos en el mismo estado
        //-- Ojo! Este ejemplo sólo implementa el primer
        //-- estado del diagrama. Habría que tener en 
        //-- cuenta el resto... lo debes hacer en tu práctica
    } 
    
}
for (let boton of botones) {

  //-- Se ejecuta cuando se pulsa un boton
  //-- que es un dígito. Para que el código sea 
  //-- mas legible la función de retrollamada se
  //-- escribe como una función normal (digito)
  boton.onclick = digito;
}



//-- Arranque del cronometro
gui.start.onclick = () => {
  console.log("Start!!");
  crono.start();
}

//-- Detener el cronómetro
gui.stop.onclick = () => {
  console.log("Stop!");
  crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
  console.log("Reset!");
  crono.reset();
  display_num.innerHTML = "****";
  estado = ESTADO.INIT;
}