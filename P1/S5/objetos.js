
// PARA DAR VALOR A LOS OBJETOS objetos.ALGO
const objetos ={
    parrafo: document.getElementById("display"),
    btn1:document.getElementById("boton"),
    btn2:document.getElementById("boton_dec"),
}

// EXISTE UN CONTADOR QUE CONTIENE VALOR Y METODO DE INCREMENTO
// se pueden hacer funciones dentro de estos objetos

const contador = {
    val:0,
    inc : function(val){
        this.val += val *2;
        objetos.parrafo.innerHTML=this.val;
        //tambien podemos añadir mas funcionalidad 
        if (objetos.parrafo.style.backgroundColor == "") {
            objetos.parrafo.style.backgroundColor = "yellow";
        }
        //-- Si ya tiene color se lo quitamos
        else {
            objetos.parrafo.style.backgroundColor = "";
        }
    }
}

objetos.btn1.onclick=()=>{
    contador.inc(1);
}
objetos.btn2.onclick=()=>{
    contador.inc(-1);
}