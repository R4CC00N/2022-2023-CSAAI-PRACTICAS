console.log("Ejecutando JS...");


const botones = document.getElementsByClassName("digito")
const display = document.getElementById("display");




//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
}

let estado=ESTADO.INIT;
//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

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



suma = document.getElementById("suma")
resta = document.getElementById("resta")
igual = document.getElementById("igual")
multi = document.getElementById("multi")
div = document.getElementById("div")
clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un botón se actúa
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}
resta.onclick = () => {
    display.innerHTML += "-";
  }

multi.onclick = () => {
    display.innerHTML += "*";
}
div.onclick = () => {
    display.innerHTML += "/";
  }
//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}