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


//let maxlevel=parseInt(window.prompt("Enter the number of levels please")) ;

var maxlevel = 10;
var pattern=[];
var flagStarted=false;
var square=0;
var sequence=[];
var level=0;
var levelCounter=0;
function clickGreen (){
    if (flagStarted=true){
        greensquare.style.backgroundColor="gray";
        greenAudio.play();
        console.log("green")
        setTimeout(function(){
            greensquare.style.backgroundColor="green";
        },100);
    }
}
function clickRed (){
    if (flagStarted=true){
        redsquare.style.backgroundColor="gray";
        redAudio.play();
        setTimeout(function(){
            redsquare.style.backgroundColor="red";
        },100);
    }
}
function clickBlue (){
    if (flagStarted=true){
        bluesquare.style.backgroundColor="gray";
        blueAudio.play();
        setTimeout(function(){
            bluesquare.style.backgroundColor="blue";
        },100);
    }
}
function clickYellow (){
    if (flagStarted=true){
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

function startSequence(){
    sequence=[];
    level++;
    flagStarted=false;
    
    if (level<maxlevel){
        square = Math.floor(Math.random() * 4) + 1;
        gameText.innerHTML = "Level " + `${level}`;
        if (square==1){
            clickGreen();
            console.log(square)
        }
        else if (square==2){
            clickRed();
        }
        else if (square==3){
            clickBlue();
        }
        else if (square==4){
            clickYellow();
        }
        pattern.push(square);
        console.log("pat",pattern);
        console.log("seq",sequence);
    } else {
        gameText.innerHTML="You won! Congrats!";
        setTimeout(function(){
            window.location.reload();},1000)
    }
    flagStarted=true;
    levelCounter=0;
   
}
greensquare.addEventListener("click",greenClicked);
redsquare.addEventListener("click",redClicked);
bluesquare.addEventListener("click",blueClicked);
yellowsquare.addEventListener("click",yellowClicked);
document.addEventListener("keypress", startSequence);


function greenClicked (){
    console.log("greenclicked");
    console.log("seq",sequence);
    console.log("pat",pattern);
    clickGreen();
    sequence.push(1);
    for (var i=0;i<sequence.length;i++){
        console.log("seq",sequence);
       
        if (sequence[i]!=pattern[i]){
            wrongAnimation();
            gameText.innerHTML="Game Over, Press Any Key to Restart";
            setTimeout(function () { location.reload(); }, 300);
            return;
        }
    }
    levelCounter++;
    if (levelCounter==level){
        setTimeout(function(){
            startSequence();
        },1000)
    }
}
function redClicked (){
    console.log("seq",sequence);
    console.log("pat",pattern);
    clickRed();
    sequence.push(2);
    for (var i=0;i<sequence.length;i++){
        if (sequence[i]!=pattern[i]){
            wrongAnimation();
            gameText.innerHTML="Game Over, Press Any Key to Restart";
            setTimeout(function () { location.reload(); }, 300);
            return;
        }

    }
    levelCounter++;
    if (levelCounter==level){
        setTimeout(function(){
            startSequence();
        },1000)
    }
}
function blueClicked (){
    console.log("seq",sequence);
    console.log("pat",pattern);
    clickBlue();
    sequence.push(3);
    for (var i=0;i<sequence.length;i++){
        if (sequence[i]!=pattern[i]){
            wrongAnimation();
            gameText.innerHTML="Game Over, Press Any Key to Restart";
            setTimeout(function () { location.reload(); }, 300);
            return;
        }

    }
    levelCounter++;
    if (levelCounter==level){
        setTimeout(function(){
            startSequence();
        },1000)
    }
}
function yellowClicked (){
    console.log("seq",sequence);
    console.log("pat",pattern);
    clickYellow();
    sequence.push(4);
    for (var i=0;i<sequence.length;i++){
        if (sequence[i]!=pattern[i]){
            wrongAnimation();
            gameText.innerHTML="Game Over, Press Any Key to Restart";
            setTimeout(function () { location.reload(); }, 300);
            return;
        }

    }
    levelCounter++;
    if (levelCounter==level){
        setTimeout(function(){
            startSequence();
        },1000)
    }
}




