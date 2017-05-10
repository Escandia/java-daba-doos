//Declarar y asignar las posibles caras de las cartas
var cards = [{photo1: "b1", photo2:"b2"},
{photo1: "d1", photo2:"d2"},
{photo1: "e1", photo2:"e2"},
{photo1: "l1", photo2:"l2"},
{photo1: "p1", photo2:"p2"}];

//Generar 3 números aleatorios para coger 3 parejas de las 5 posibles y almacenando en un array
var min = 0;
var max = 5;
var randomCoupleOne = Math.floor(Math.random() * max - min) + min;
var randomCoupleTwo = Math.floor(Math.random() * max - min) + min;
while (randomCoupleOne === randomCoupleTwo){
  randomCoupleTwo = Math.floor(Math.random() * max - min) + min;
}
var randomCoupleThree = Math.floor(Math.random() * max - min) + min;
while (randomCoupleOne === randomCoupleThree || randomCoupleTwo === randomCoupleThree){
  randomCoupleThree = Math.floor(Math.random() * max - min) + min;
}
var position = [randomCoupleOne, randomCoupleTwo, randomCoupleThree];

//Separar en un array todas las caras
var choosenCards = [];
for (var i=0; i<position.length; i++){
  var actualCardOne = cards[position[i]].photo1;
  var actualCardTwo = cards[position[i]].photo2;
  choosenCards.push(actualCardOne, actualCardTwo);
}

//Barajar las caras
function shuffle(choosenCards){
  firstIndexCards = 0;
  lastIndexCards = choosenCards.length - 1;
  for (var iteration=1; iteration<=10; iteration++){
    var indexRandom = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    while (indexRandom === indexRandom2){
      var indexRandom2 = Math.floor(Math.random() * (lastIndexCards - firstIndexCards) + firstIndexCards);
    }
    var change = choosenCards[indexRandom];
    var change2 = choosenCards[indexRandom2];
    choosenCards[indexRandom] = change2;
    choosenCards[indexRandom2] = change;
  }
}
shuffle(choosenCards);


//Asignar a cada div su cara
var faceCardOne = document.querySelectorAll(".front");
for (var j=0; j<faceCardOne.length; j++){
  var urlCard = "./img/cards/"+choosenCards[j]+".png";
  faceCardOne[j].setAttribute("src", urlCard);
}

//Rotar las cartas al seleccionarlas
var upCards = [];
var returnCards = [];
var tirada = 0;
function rotate(event){
  event.target.parentElement.parentElement.style.transform = "rotateY(180deg)";
  returnCards.push(event.target.parentElement.parentElement);
  var sourceCurrentCardFace = event.target.parentElement.parentElement.children[1].children[0].getAttribute("src");
  upCards.push(sourceCurrentCardFace[12]);
  tirada = tirada + 1;
  if (tirada === 2) {
    compare(upCards);
  }
}

var rotateCards = document.querySelectorAll(".rotate-card");

for (var i = 0; i < rotateCards.length; i++) {
  rotateCards[i].addEventListener("click", rotate);
}

//Comparar las caras seleccionadas y actuar en consecuencia
var score = 0;
var fail = -5;
var win = 10;
var correctCouple = 0;

function compare(variable){
  var totalScore = document.querySelector(".total-score-text");
  var oneScore = document.querySelector(".score-text");
  if (variable[0] === variable[1]) {
    score = score + win;
    correctCouple++;
    totalScore.innerHTML = score;
    oneScore.innerHTML = win;
    if (correctCouple === 3) {
      var modal = document.querySelector(".modal");
      var textModal = document.querySelector(".score-game2");
      document.getElementById('audioJava').play();
      modal.style.display = "flex";
      textModal.innerHTML = "¡Genial! Tu puntuación final son " + score + " puntos";
    }
  }else{
    returnCards[0].style.transform="rotateY(360deg)";
    returnCards[1].style.transform="rotateY(360deg)";
    if (score>=5) {
      score = score + fail;
    } else {
      score = 0;
    }
    totalScore.innerHTML = score;
    oneScore.innerHTML = fail;
  }
  variable.splice(0,2);
  tirada=0;
  returnCards.splice(0,2);
}

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
