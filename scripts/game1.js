var min = 1;
var max = 100;
var chances = 0;
var random = Math.floor(Math.random() * max - min) + min;

function gameNumber(){

 var numberInput=document.querySelector("#number").value;
 var text = document.querySelector("#textError");
 chances = chances + 1;

 if (numberInput >= min && numberInput <= max ) {
     if (numberInput < random) {
       textError.innerHTML = "Sube al glaciar";
       if (text.classList.contains("fade-in")) {
        text.className = "fade-in2";
       }else{
       text.className = "fade-in";}
     } else if (numberInput > random){
       textError.innerHTML = "Baja a la caverna";
       if (text.classList.contains("fade-in")) {
        text.className = "fade-in2";
       }else{
       text.className = "fade-in";}
     } else {
       textError.innerHTML = "¡Correcto! ¡Has acertado! Con " + chances + " intentos";
       document.getElementById('audioJava').play();
       var modal = document.querySelector(".modal");
       var textModal = document.querySelector(".score-game1");
       modal.style.display = "flex";
       textModal.innerHTML = "¡Correcto! ¡Has acertado! Con " + chances + " intentos";
     }
 } else {
   textError.innerHTML = "Introduce un número valido, ¡Neandertal!";
   if (text.classList.contains("fade-in")) {
     text.className = "fade-in2";
   }else{
     text.className = "fade-in";
   }
  }
}

var inputEnter = document.querySelector("#number");

function onKeyPress(event){
  if(event.charCode === 13){
    gameNumber();
  }
}

inputEnter.addEventListener("keypress", onKeyPress);

// JS button popUp
var restart = document.querySelector("#domInst");
var popUp = document.querySelector(".pop-up");
restart.onclick = function(){
    popUp.style.display = "flex";
}
var span = document.getElementById("close");
span.onclick = function(){
  popUp.style.display = "none";
}
