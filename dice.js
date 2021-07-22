const loadGame= () =>{
var randomVariable1 = Math.floor((Math.random()*6)+1);

var randomDice= "images/dice" + randomVariable1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDice);

var randomVariable2 = Math.floor(Math.random()*6)+1;
 
var randomDice1="images/dice" + randomVariable2 + ".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDice1);
//IF Player 1 wins
if(randomVariable1>randomVariable2){
    document.querySelector("h1").textContent="Player 1 Wins";

}
//If player 2 wins
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").textContent="Player 2 Wins";
}
//If its a draw
else if (randomVariable1=randomVariable2){
    document.querySelector("h1").textContent="Draw";
}
}