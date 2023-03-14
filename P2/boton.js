//-- Elementos de la gui
const gui = {
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset"),
}
window.alert('TIENES QUE ADIVINAR EL CODIGO SECRETO PERO TIENES 10 INTENTOS, BUENA SUERTE')
const botones = document.getElementsByClassName("digito")
const display_num_1 = document.getElementById("display_num_1");
const display_num_2 = document.getElementById("display_num_2");
const display_num_3 = document.getElementById("display_num_3");
const display_num_4 = document.getElementById("display_num_4");
const display_error= document.getElementById("display_errores");

console.log("Ejecuitando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada
const ESTADO = {
  INIT: 0,
  EMPEZAR: 1,
}

let estado=ESTADO.INIT;
//-- Función de retrollamada de los botones
//-- botones de la clase dígito

// para adivinar el numero tenemos que meter el numero a adivinar en un array
// haremos ifs para ver si el digito esta en la lista cogemos el indice hacemos un pop y escribimos
// cuando la lista este vacia ganamos para el contador y el juego sale un aviso de has ganado
// empezar el juego solo cuando damos start

var secretcode=[];
var displays=[display_num_1,display_num_2,display_num_3,display_num_4];
var errores=0;
var aciertos = 0;

function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- se hará una cosa u otra
    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {
      errores=0;
      aciertos=0;
      numero_random();
      estado=ESTADO.EMPEZAR
      crono.start();
    } 
    if(estado== ESTADO.EMPEZAR) {
      comprobar_digitos(ev);
    }
    if(aciertos == 4) {
      console.log('HAS GANADO!!!!!!')
      crono.stop();
      window.alert('HAS GANADO');
    } 
    if (errores==10){
      window.alert('HAS PERDIDO')
      crono.stop();
    }
    
}
for (let boton of botones) {

  //-- Se ejecuta cuando se pulsa un boton
  //-- que es un dígito. Para que el código sea 
  //-- mas legible la función de retrollamada se
  //-- escribe como una función normal (digito)
  boton.onclick = digito;
}

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


//-- Generamos números secretos y los almacenamos en un array
function numero_random(){
  for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(9);
    secretcode.push(rnum.toString());
  }
}

function comprobar_digitos(ev){
  for (i=0;i<secretcode.length;i++)
  {
    if(secretcode[i] == ev.target.value){
      displays[i].innerHTML = ev.target.value;
      aciertos+=1;
      secretcode[i]=22;
      break;
    }
  }
  if(secretcode.includes(ev.target.value)){
    console.log('ACIERTOS',aciertos)
  }
  else{
    //PODEMOS METER OTRO DISPLAY QUE VAYA RESTANDO
    errores+=1;
    display_error.innerHTML-=1;
    if(display_error.innerHTML<0){
      errores=0;
      display_error.innerHTML=0;
    }
    console.log('FALLOS',errores)
  }
}

//-- Arranque del cronometro
gui.start.onclick = () => {
  console.log("Start!!");
  crono.start();
  estado=ESTADO.INIT
  //numero_random()
}

//-- Detener el cronómetro
gui.stop.onclick = () => {
  console.log("Stop!");
  crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
  console.log("Reset!");
  crono.stop();
  crono.reset();
  aciertos=[];
  secretcode=[];
  display_num_1.innerHTML = '*';
  display_num_2.innerHTML = '*';
  display_num_3.innerHTML = '*';
  display_num_4.innerHTML = '*';
  display_error.innerHTML = '10';
  estado = ESTADO.INIT;
  
}