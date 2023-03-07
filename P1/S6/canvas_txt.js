console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 640;
canvas.height = 420;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");
ctx.beginPath();
    //-- Texto solido
    ctx.font = "50px Times New Roman";
    ctx.fillStyle = 'red'
    ctx.fillText("Texto sólido", 100, 300);

    //-- Texto trazo
    ctx.strokeStyle = 'blue'; // strokestyle para trazado
    ctx.font = "55px Arial"; // tamaño y fuente
    ctx.strokeText("Texto trazo", 50, 100); // texto , posicion x, posicion y
ctx.closePath();