var min = 1;
var max = 100;
var chances = 0;
var random = Math.floor(Math.random() * max - min + 1) + min;




function gameNumber(){

 var numberInput=document.getElementById("number").value;
 chances = chances + 1;

 if (numberInput >= min && numberInput <= max ) {
     if (numberInput < random) {
       textError.innerHTML = "Introduce un número más alto";
     } else if (numberInput > random){
       textError.innerHTML = "Introduce un número más bajo";
     } else {
       textError.innerHTML = "Correcto has acertado!! Con " + chances + " intentos";
       document.getElementById('audioJava').play();
     }
 } else {
   textError.innerHTML = "Introduce un número valido, Neandertal!!.";
 }
}

var inputEnter = document.querySelector("#number");

function onKeyPress(event){
    if(event.charCode === 13){
        gameNumber();
    }
}

inputEnter.addEventListener("keypress", onKeyPress);





// function validar(e){
//   var tecla = (document.all) ? e.keyCode : e.which;
//   if (tecla == 13){
//   gameNumber();
//   }
// }
