//Generate random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Create the image
var randomDiceImage = "dice" + randomNumber1 + ".png";

//Create absolute path to the image
var randomImageSource = "images/" + randomDiceImage;

//Find the img for which we need to change the src attribute
var image1 = document.querySelectorAll("img")[0];

//Change the src attribute
image1.setAttribute("src", randomImageSource);

//Repeat the same for the second dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = "🚩Player1 Wins!!"
} else if (randomNumber2 > randomNumber1){
  document.querySelector(".container h1").innerHTML = "Player2 Wins!! 🚩"
} else {
  document.querySelector(".container h1").innerHTML = "Draw!!!"
}
