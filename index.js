
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; //randomselection

var image1 = document.querySelectorAll("img")[0] //randomimage for first die
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //random image second dice

var image2 = document.getElementsByClassName("img2")[0]
image2.setAttribute('src', randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Dice 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Dice 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
