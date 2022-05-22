const mainContainer =document.getElementById("mainContainer");
const gameText=document.getElementById("gameText");
const greensquare = document.getElementById("greensquare");
const redsquare = document.getElementById("redsquare");
const yellowsquare = document.getElementById("yellowsquare");
const bluesquare = document.getElementById("bluesquare");

var greenAudio = new Audio('./assets/sounds/green.mp3');
var redAudio = new Audio('./assets/sounds/red.mp3');
var yellowAudio = new Audio('./assets/sounds/yellow.mp3');
var blueAudio = new Audio('./assets/sounds/blue.mp3');
var wrongAudio = new Audio('./assets/sounds/wrong.mp3');

let maxlevel=window.prompt("Enter the number of levels please");
var pattern=[];
var flagStarted=true;
var sequence=[];
document.addEventListener("keypress",wrongAnimation);
function clickGreen (){
    if (flagStarted===true){
        greensquare.style.backgroundColor="gray";
        greenAudio.play();
        setTimeout(function(){
            greensquare.style.backgroundColor="green";
        },100);
    }
}
function clickRed (){
    if (flagStarted===true){
        redsquare.style.backgroundColor="gray";
        redAudio.play();
        setTimeout(function(){
            redsquare.style.backgroundColor="red";
        },100);
    }
}
function clickBlue (){
    if (flagStarted===true){
        bluesquare.style.backgroundColor="gray";
        blueAudio.play();
        setTimeout(function(){
            bluesquare.style.backgroundColor="blue";
        },100);
    }
}
function clickYellow (){
    if (flagStarted===true){
        yellowsquare.style.backgroundColor="gray";
        yellowAudio.play();
        setTimeout(function(){
            yellowsquare.style.backgroundColor="yellow";
        },100);
    }
}
function wrongAnimation (){
    mainContainer.style.backgroundColor="red";
    wrongAudio.play();
    setTimeout(function(){
        mainContainer.style.backgroundColor="navy";
    },300)
}