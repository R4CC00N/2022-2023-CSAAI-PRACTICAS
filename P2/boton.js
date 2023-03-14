//-- Elementos de la gui
const gui = {
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset"),
}
const botones = document.getElementsByClassName("digito")
const display_num_1 = document.getElementById("display_num_1");
const display_num_2 = document.getElementById("display_num_2");
const display_num_3 = document.getElementById("display_num_3");
const display_num_4 = document.getElementById("display_num_4");

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
var aciertos = [];
var displays=[];

function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {
      numero_random();
      estado=ESTADO.EMPEZAR
      crono.start();
    } 
    if(estado== ESTADO.EMPEZAR) {
      comprobar_digitos(ev);
    }
    if(aciertos.length == 4) {
      console.log('HAS GANADO!!!!!!')
      crono.stop();
      aciertos=[];
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
  console.log('CODIGO SECRETO',secretcode)
  console.log('ACIERTOS',aciertos)
  console.log('DISPLAYS',displays)
  displays=[display_num_1,display_num_2,display_num_3,display_num_4];
  for (i=0;i<secretcode.length;i++)
  {
    if(secretcode[i]== parseInt(ev.target.value)){
      displays[i].innerHTML = ev.target.value;
      //displays.splice(i,1);
      aciertos.push(secretcode[0]);
      secretcode[i]=22;
    }
    
  }
}

function comprobar_digitos2(ev){
  console.log('CODIGO SECRETO',secretcode)
  console.log('ACIERTOS',aciertos)
  if(secretcode[0]==ev.target.value){
    display_num_1.innerHTML = ev.target.value;
    aciertos.push(secretcode[0])
  }
  if(secretcode[1]==ev.target.value){
    display_num_2.innerHTML = ev.target.value;
    aciertos.push(secretcode[1])
  }
  if(secretcode[2]==ev.target.value){
    display_num_3.innerHTML = ev.target.value;
    aciertos.push(secretcode[2])
  }
  if(secretcode[3]==ev.target.value){
    display_num_4.innerHTML = ev.target.value;
    aciertos.push(secretcode[3])
  }

}

//-- Arranque del cronometro
gui.start.onclick = () => {
  console.log("Start!!");
  crono.start();
  estado=ESTADO.EMPEZAR
  //numero_random()
}

//-- Detener el cronómetro
gui.stop.onclick = () => {
  console.log("Stop!");
  estado = ESTADO.FINAL
  crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
  console.log("Reset!");
  crono.stop();
  numero_random()
  crono.reset();
  aciertos=[];
  secretcode=[];
  display_num_1.innerHTML = '*';
  display_num_2.innerHTML = '*';
  display_num_3.innerHTML = '*';
  display_num_4.innerHTML = '*';
  estado = ESTADO.INIT;
  
}