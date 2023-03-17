

//Deja en la variable "boton" todo lo que contiene la clase drum
var boton= document.querySelectorAll(".drum");
var i;

//Como la clase drum pertenece al elemento button.
//Ponemos en escucha por si se le da click a algunos de los botones
for (i=0; i<boton.length; i++)
  {
    // Cuando se le da clic al boton llama a una funcion anonima "function()". Si te das cuenta no tiene nombre
    boton[i].addEventListener("click",function(){

      //aqui nos damos cuenta que valor tiene el boton pulsado y la asignamos a la variable "buttonInnerHTML"
     var buttonInnerHTML=this.innerHTML;
     buttonAnimation(buttonInnerHTML);
     checkAudio(buttonInnerHTML);

  });
}

//checa que tecla fue apretada
document.addEventListener("keydown", function(event) {
  checkAudio(event.key);
  buttonAnimation(event.key);
})

//toca el sonido de acuerdo al boton presionado o bien a la letra pulsada
function checkAudio(evento){
  switch (evento)
  {
    case "w":
       audio=new Audio("sounds/tom-1.mp3");
       audio.play();
       break;
     case "a":
       audio=new Audio("sounds/tom-2.mp3");
       audio.play();
       break;
     case "s":
       audio=new Audio("sounds/tom-3.mp3");
       audio.play();
       break;
     case "d":
       audio=new Audio("sounds/tom-4.mp3");
       audio.play();
       break;
     case "j":
       audio=new Audio("sounds/snare.mp3");
       audio.play();
       break;
     case "k":
       audio=new Audio("sounds/crash.mp3");
       audio.play();
       break;
     case "l":
       audio=new Audio("sounds/kick-bass.mp3");
       audio.play();
       break;
    default: console.log(evento);
  }
}
function buttonAnimation(currentKey){
var changeStyle = document.querySelector("."+currentKey);
  changeStyle.classList.add("pressed");
  setTimeout(function(){
    changeStyle.classList.remove("pressed");
  },100);
}
