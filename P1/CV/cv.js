function copiarAlPortapapeles(correo) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(correo).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

}
