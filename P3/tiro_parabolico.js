console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const display = document.getElementById("display");
const crono = new Crono(display);

//-- Definir el tamaño del canvas
canvas.width = 900;
canvas.height = 300;
const size = 30;
//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 10;
let y = size +10;


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
//-- Función principal de animación

function update() 
{
    vx = vel * Math.cos((angle*Math.PI)/180);
    vy = vel * Math.sin((angle*Math.PI)/180);
    x=x+ vx*t;
    y= y + vy*t-0.5*g*t*t;
    if (active){
      vel = velocidad.value*0.1;
      angle = angulo.value;
      t+=0.04;
      crono.start();
    }
    else{
      crono.stop();
    }
  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= size + 5) {
    vel = 0;
    t=0;
    active=false;
  }
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, canvas.height - y, size, size);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
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

}