//.Exercise 1 

var prompt = document.getElementById('prompt');


var left = document.getElementById('left');

left.addEventListener('click', textChangeLeft)

function textChangeLeft(){
	prompt.innerHTML = "I'm Right"
}

var right = document.getElementById('right');

right.addEventListener('click', textChangeRight)

function textChangeRight(){
	prompt.innerHTML = "No, I'm right!"
}