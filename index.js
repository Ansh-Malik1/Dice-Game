var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDiceImg="dice"+randomNumber1+".png";
var randomImgSource="images/"+randomDiceImg
document.querySelectorAll("img")[0].setAttribute("src",randomImgSource);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomDiceImg="dice"+randomNumber2+".png";
var randomImgSource="images/"+randomDiceImg
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="🚩 PLAYER 1 WINS";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML="PLAYER 2 WINS🚩";
}
else{
    document.querySelector("h2").innerHTML="🚩 ITS A DRAW🚩";
}