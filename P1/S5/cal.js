console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")
const display = document.getElementById("display");
//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value)
{
  console.log("Valor: " + value);
}

for (let boton of botones) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  boton.onclick = (ev) => {
    digito(ev.target.value)
    display.innerHTML+=ev.target.value;
  }
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
}