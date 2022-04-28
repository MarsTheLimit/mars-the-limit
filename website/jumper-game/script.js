var character = document.getElementById("character");
var playAgain = document.getElementById("againButton");
document.addEventListener("click",jump);
let score = 0;
var scoreDis = document.getElementById("score");
let gameActive = true;


function jump() {
	if(character.classList == "animate"){return;}
	character.classList.add("animate");
    setTimeout(removeJump,300); 
 };
 
 function removeJump(){
    character.classList.remove("animate");
};

var block = document.getElementById("block");
var teller = document.getElementById("teller");
function checkDead(){
	if (gameActive === true) {
		playAgain.style.display = "none";
	}
	else {
		playAgain.style.display = "block";
	}
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
		teller.innerHTML = "Good Job! Your score is "+score+".";
		block.style.animationPlayState = 'paused';
		character.style.animationPlayState = 'paused';
		gameActive = false;
    }
	else {
		if (gameActive === true) {
		score += 1;
		scoreDis.innerHTML = "Score: "+score;
		}
	}
};

setInterval(checkDead, 10);