console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 2000;
canvas.height = 2000;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Leer la imagen del documento html
//-- Esta deshabilitada
var logo = document.getElementById("logo-urjc");

logo.onload = ()=> {
  //-- Insertar la imagen en el canvas, una vez que
  //-- ya esté cargada!
  ctx.drawImage(logo, 1200,1600);
  console.log('aun no se carga')
};
var raccoon = document.getElementById("raccoon");
raccoon.onload = ()=> {
    //-- Insertar la imagen en el canvas, una vez que
    //-- ya esté cargada!
    ctx.drawImage(raccoon, 15,18);
    console.log('aun no se carga')
  };
