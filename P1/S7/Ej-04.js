//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
body = document.getElementsByTagName('body')[0]

//-- Función de retrollamada de tecla pulsada
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
  if (e.key == ' ') {//con letra o caracter

    //-- Cambiar la activación de la clase color
    body.classList.toggle("color");
  }
  if (e.keyCode == 83) { // con codigo de teclado

    //-- Cambiar la activación de la clase color
    body.classList.toggle("color");
  }
}