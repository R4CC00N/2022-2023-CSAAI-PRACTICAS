console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 680;
canvas.height = 420;


const ctx = canvas.getContext("2d");

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  //ctx.rect(5,5, 100, 50); // metodo rect es para rectangulos 
  //ctx.arc(50,50,25,0,(Math.PI/180)*360,true);
  // para arc (lugar x, lugar y , radio, completitud, grados,boolean opcional )

  // DIBUJAR LINEAS EN VEZ DE UNA FIGURA COMPLETA
  //-- Línea horizontal
  ctx.moveTo(10, 80);// DESDE DONDE EMPIEZA
  //ctx.lineTo(10, 20); // HACIA DONDE VA
  ctx.lineTo(150, 20); // HACIA DONDE VA

  //-- Línea horizontal y vertical, unidas
  ctx.moveTo(10, 80);
  ctx.lineTo(150,80);
  ctx.lineTo(150,20);

  ctx.strokeStyle = 'white';
  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 2;

  //-- Color de relleno PARA FIGURAS CERRADAS MEJOR
   ctx.fillStyle = 'green';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo 
  ctx.stroke();
ctx.closePath();


ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(50,250, 100, 50); // metodo rect es para rectangulos 

  ctx.strokeStyle = 'purple';
  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 2;

  //-- Color de relleno PARA FIGURAS CERRADAS MEJOR
   ctx.fillStyle = 'red';

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo 
  ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.arc(150,150,50,0,(Math.PI/180)*360,true);
    // para arc (lugar x, lugar y , radio, completitud, grados,boolean opcional )

    ctx.strokeStyle = 'blue';
    //-- Cambiar el tamaño de la línea del trazo
    ctx.lineWidth = 2;
  
    //-- Color de relleno PARA FIGURAS CERRADAS MEJOR
    ctx.fillStyle = 'cyan';
  
    //-- Mostrar el relleno
    ctx.fill();
  
    //-- Mostrar el trazo 
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.arc(350,150,50,(Math.PI/180)*180,0,true);
    // para arc (lugar x, lugar y , radio, completitud, grados,boolean opcional )

    ctx.strokeStyle = 'red';
    //-- Cambiar el tamaño de la línea del trazo
    ctx.lineWidth = 2;
  
    //-- Color de relleno PARA FIGURAS CERRADAS MEJOR
    ctx.fillStyle = 'pink';
  
    //-- Mostrar el relleno
    ctx.fill();
  
    //-- Mostrar el trazo 
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.arc(350,350,50,0,(Math.PI/180)*180,true);
    // para arc (lugar x, lugar y , radio, completitud, grados,boolean opcional )

    ctx.strokeStyle = 'orange';
    //-- Cambiar el tamaño de la línea del trazo
    ctx.lineWidth = 2;
  
    //-- Color de relleno PARA FIGURAS CERRADAS MEJOR
    ctx.fillStyle = 'yellow';
  
    //-- Mostrar el relleno
    ctx.fill();
  
    //-- Mostrar el trazo 
    ctx.stroke();
ctx.closePath();