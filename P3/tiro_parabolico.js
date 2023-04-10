console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const display = document.getElementById("display");
const crono = new Crono(display);

//-- Definir el tamaño del canvas
canvas.width = 900;
canvas.height = 300;
//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
//-- Esta deshabilitada
var p1 = document.getElementById("raccoon");
var p2 = document.getElementById("martillo");
var fondo = document.getElementById("fondo");

var gif = new Image();
gif.src='giphy.gif'

const click_sound = new Audio('lanza.mp3');
const click_sound2 = new Audio('punch.mp3');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//-- Coordenadas del objeto lanzado
const size = 60;
let x = 10;
let y = size +10;

const size2 = 60;
let x0 = Math.round(getRandomArbitrary(80,canvas.width-size2));
let y0 = size2 +10
console.log('distancia',x0)

// DISPLAYS QUE SE USARAN PARA VELOCIDAD Y ANGULO

const angulo = document.getElementById("range");
const disp_angulo = document.getElementById("range_disp");

const velocidad = document.getElementById("range2");
const disp_velocidad = document.getElementById("range_disp2");

// iniciamos en 0 todo
angulo.value=0;
velocidad.value=0;
disp_angulo.innerHTML = angulo.value;
disp_velocidad.innerHTML = velocidad.value;

angulo.oninput = () => {
    disp_angulo.innerHTML = angulo.value;
}

velocidad.oninput = () => {
    disp_velocidad.innerHTML = velocidad.value;
}


// VARIABLES PARA EL MOVIMIENTO PARABOLICO

// componentes vectoriales de la velocidad en cada instante
var vx; 
var vy;

var vel=0;
var angle=0;
var t=0;
var g = 9.8;
var active = false;

// variable para fallos
var fallos=0;

//-- Función principal de animación

function update() 
{
  //-- 1) Creacion del movimiento parabolico
  movimiento();
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  dibujarFondo();
  dibujarPj2();
  dibujarPj1();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}


function range(start, stop=undefined, step=1) {
  const startArray = stop  === undefined ? 0 : start;
  const stopArray = stop  === undefined ? start : stop;
  return Array.from({ length: (stopArray - startArray) / step + 1}, (_, i) => startArray + (i * step));
}


function movimiento(){

  vx = vel * Math.cos((angle*Math.PI)/180);
  vy = vel * Math.sin((angle*Math.PI)/180);
  x=x+ vx*t;
  y= y + vy*t-0.5*g*t*t;

  // activacion de movimiento
  if (active){
    
    vel = velocidad.value*0.123;
    angle = angulo.value;
    t+=0.04;
    crono.start();
  }
  else{
    click_sound.currentTime = 0;
    click_sound.play();
    crono.stop();
  }
  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= size + 5) {
    vel = 0;
    t=0;
    active=false;
    
    if ((range(x0-((size*2)/3),x0+((size*2)/3)).includes(Math.round(x)) && range(y0-10,y0+10).includes(Math.round(y)))==false){
        window.alert('HAS FALLADO')
        x=10;
        y=size+10;
        fallos += 1;
    }
    
  }
  revisar_intento();

}

function revisar_intento(){
  // deteccion de colision y victoria
  if ( range(x0-((size*2)/3),x0+((size*2)/3)).includes(Math.round(x)) && range(y0-10,y0+10).includes(Math.round(y))){
    click_sound2.currentTime = 0;
    click_sound2.play();
    window.alert('HAS GANADO');
    x=10;
    y=size+10;
    location.reload();
  }
  if(fallos == 3){
    window.alert('HAS PERDIDO GRACIAS POR JUGAR');
    fallos = 0;
    location.reload();
  }
}

function dibujarFondo(){

  ctx.beginPath();
    ctx.drawImage(fondo,0,-20, canvas.width, canvas.height+50);

    //-- Dibujar
    //ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.drawImage(gif,500,0, 100, 100);
  ctx.closePath();
}
function dibujarPj1(){
  ctx.beginPath();
    ctx.drawImage(p2,x, canvas.height - y, size, size);

    //-- Dibujar
    //ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();
}

function dibujarPj2(){

  ctx.beginPath();
    ctx.drawImage(p1,x0, canvas.height - y0, size2, size2);

    //-- Dibujar
    ctx.fillStyle = 'green';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();
}

update();
// BOTONES
const play = document.getElementById("play");
const reset = document.getElementById("reset");

play.onclick = ()=>{
    active = true;
    console.log('play')
}
reset.onclick = ()=>{
    crono.reset();
    console.log('reset')
    vel = 0;
    angle = 0;
    active=false;
    x=10;
    y=size+10;
    location.reload();

}