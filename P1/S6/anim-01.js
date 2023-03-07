console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 800;
canvas.height = 600;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición del elemento a animar
let x = 0;
let y = 0;

//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animación:
  //-- 1) Actualizar posiciones de los elementos
  //-- Por hacer

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 100, 300);

    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(x-200, y+350, 150, 100);

  //-- Dibujar
  ctx.fillStyle = 'white';

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke()
ctx.closePath();
  ctx.beginPath();
  ctx.rect(x-100, y+200, 300, 300);

  //-- Dibujar
  ctx.fillStyle = 'white';

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke()
ctx.closePath();



  
  //-- Comprobar colisión con borde derecho
  //-- Si se alcanza la anchura del canvas, se cambia la velocidad
  //-- de signo (rebote)
  if (x >= canvas.width) {
    console.log('aqui')
    x=0;
  }
  else{x+=5;}
  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();