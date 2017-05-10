var favVar = "ramon";
var numTerminal = 5404;
var favSmo = "fresa";

function validate(){
  var favVarUser = document.querySelector("#favourite-variable").value.toLowerCase();
  var numTerminalUser = parseInt(document.querySelector("#number-terminal").value);
  var favSmoUser = document.querySelector("#favourite-smoothie").value.toLowerCase();

  if (favVarUser === favVar && numTerminalUser === numTerminal && favSmoUser === favSmo){
    document.querySelector("#favourite-variable").style.borderColor = "green";
    document.querySelector("#number-terminal").style.borderColor = "green";
    document.querySelector("#favourite-smoothie").style.borderColor = "green";
    var modal = document.querySelector(".modal");
    var textModal = document.querySelector(".score-game3");
    document.getElementById('audioJava').play();
    modal.style.display = "flex";
    textModal.innerHTML = "¡Muy bien! Has acertado todas las preguntas!";
  }else{
    if(favVarUser !== favVar){
      document.querySelector("#favourite-variable").style.borderColor = "red";
      if (numTerminalUser !== numTerminal) {
        document.querySelector("#number-terminal").style.borderColor = "red";
        if (favSmoUser !== favSmo) {
          document.querySelector("#favourite-smoothie").style.borderColor = "red";
        }else{
          document.querySelector("#favourite-smoothie").style.borderColor = "green";
        }
      }else{
        document.querySelector("#number-terminal").style.borderColor = "green";
        if (favSmoUser !== favSmo) {
          document.querySelector("#favourite-smoothie").style.borderColor = "red";
        }else{
          document.querySelector("#favourite-smoothie").style.borderColor = "green";
        }
      }
    }else{
      document.querySelector("#favourite-variable").style.borderColor = "green";
      if (numTerminalUser !== numTerminal) {
        document.querySelector("#number-terminal").style.borderColor = "red";
        if (favSmoUser !== favSmo) {
          document.querySelector("#favourite-smoothie").style.borderColor = "red";
        }else{
          document.querySelector("#favourite-smoothie").style.borderColor = "green";
        }
      }else{
        document.querySelector("#number-terminal").style.borderColor = "green";
        if (favSmoUser !== favSmo) {
          document.querySelector("#favourite-smoothie").style.borderColor = "red";
        }else{
          document.querySelector("#favourite-smoothie").style.borderColor = "green";
        }
      }
    }
  }
}

var inputEnter1 = document.querySelector("#favourite-variable");
var inputEnter2 = document.querySelector("#number-terminal");
var inputEnter3 = document.querySelector("#favourite-smoothie");

function onKeyPress(event){
  if(event.charCode === 13){
    validate();
  }
}

inputEnter1.addEventListener("keypress", onKeyPress);
inputEnter2.addEventListener("keypress", onKeyPress);
inputEnter3.addEventListener("keypress", onKeyPress);

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
