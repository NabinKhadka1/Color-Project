var numSquares = 6;
colors=generateColor(6);
//Select squares.
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var highlight = document.getElementById("highlight");
highlight.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	highlight.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
			if(colors[i]) {
			    squares[i].style.background = colors[i];
			} else {
				squares[i].style.display = "none";
			}
	}
	
	
});	
hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	highlight.textContent = pickedColor;
	for(var i=0;i<squares.length;i++) {
	    squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	
});	
	
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	
	highlight.textContent = pickedColor;
	this.textContent = "New colors";
	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++) {
	squares[i].style.background = colors[i];
	}	
	h1.style.background = "steelblue";
	
})

//Assign different colors to squares.		
for(var i=0;i<squares.length;i++) {
	squares[i].style.background = colors[i];
	
	//add event listener.
	squares[i].addEventListener("click", function() {
		var selectedColor = this.style.background;
		if(pickedColor == selectedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again!";
			changeColors(selectedColor);
			h1.style.background = selectedColor;
		} else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
});}

function changeColors(color) {
	for(var i=0;i<squares.length;i++) {
		squares[i].style.background = color;
	}
}  
function pickColor() {
	var randomNum = Math.floor(Math.random()*squares.length);
	return colors[randomNum];
}

function generateColor(num) {
	var arr = [];
	for(var i=0;i<num;i++) {
		arr.push(randomColor());
		
	}
	return arr;
	
	
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	  
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
	
}
	


