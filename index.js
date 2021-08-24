for (var i = 0; i < 7; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var clicked = this.innerHTML;
    makeSound(clicked);
    buttonAnimation(clicked);
   });


}


  document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
   });




function makeSound(clicked)
{

  switch (clicked)
   {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      default:
      console.log("clicked");
  }

}


function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100);
}






//Using if elseif

// if (clicked === "w") {
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
// if (clicked === "a") {
//   var audio = new Audio("sounds/tom-2.mp3");
//   audio.play();
// }
// if (clicked === "s") {
//   var audio = new Audio("sounds/tom-3.mp3");
//   audio.play();
// }
// if (clicked === "d") {
//   var audio = new Audio("sounds/tom-4.mp3");
//   audio.play();
// }
// if (clicked === "j") {
//   var audio = new Audio("sounds/snare.mp3");
//   audio.play();
// }
// if (clicked === "k") {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }
// if (clicked === "l") {
//   var audio = new Audio("sounds/kick-bass.mp3");
//   audio.play();
// }
