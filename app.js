let numeroSecreto= 0;
let intentos= 0;
let listanumerosSorteados=[];
let numeroMaximo=10

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(intentos);
  if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${ (intentos=== 1) ?  "vez" : "veces"} `);
  document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertò.
    if(numeroDeUsuario>numeroSecreto){
      asignarTextoElemento("p", "El número secreto es menor");
    } else{
      asignarTextoElemento("p", "El número secreto es mayor");
    } 
    intentos++;
    limpiarCaja()
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value="";


}


function generaNumeroSecreto(){
 let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

 console.log(numeroGenerado);
 console.log(listanumerosSorteados);
 //si ya sorteamos todos los numeros
if(listanumerosSorteados.length==numeroMaximo) {
asignarTextoElemento("p","Ya se sortearon todos los nùmeros posibles");
}else{
  //si el numero generado está en la lista
  if(listanumerosSorteados.includes(numeroGenerado)){
   return generaNumeroSecreto();
  } else{
  listanumerosSorteados.push(numeroGenerado);
    return numeroGenerado
  }
  
 }

}

function condicionesIniciales() {
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto= generaNumeroSecreto();
intentos=1;

}
function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalos de números
  condicionesIniciales();
  //generar el número aleatorio
  //inicializar el número intentos
   //deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();