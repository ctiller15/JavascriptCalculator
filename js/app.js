var display = document.querySelector(".display");
var numSection = document.querySelector(".numButtons");
var opSection = document.querySelector(".opButtons");
var deleteSection = document.querySelector(".deleteButtons");
var calc = document.querySelector(".calc");
var firstVal = "";
var secondVal = "";
var option = 0;
var solved = false;
var opsObj = {};

// A simple function that creates the necessary operation buttons.
function createOperation(name, icon, operation){
	opsObj[name] = {}
	opsObj[name].button = document.createElement("button");
	opsObj[name].button.textContent = icon;
	opsObj[name].button.addEventListener("click", function(){
		handleOperator(operation);
	});
	opSection.appendChild(opsObj[name].button);
}

// sets the "solved" state to true, and completes whatever operation was primed.
function solve(){
	equality();
	solved = true;
}

function finishEquation(solution){
	display.textContent = solution;
	firstVal = "";
	secondVal = "";
}

function equality(){
	// setting up all of the operations. 1 is addition
	if(option === 1){
		sum = Number(firstVal) + Number(secondVal);
		finishEquation(sum);
	}
	// 2 is subtraction.
	else if(option === 2){
		diff = Number(firstVal) - Number(secondVal);
		finishEquation(diff);
	}
	// 3 is multiplication.
	else if(option === 3){
		product = Number(firstVal) * Number(secondVal);
		finishEquation(product);
	}
	// 4 is division.
	else if(option === 4){
		quotient = Number(firstVal) / Number(secondVal);
		finishEquation(quotient);
	}
	// resetting all of the event listeners on the buttons.
	nums.forEach(function(num){
		num.removeEventListener("click", updateNum, false);
	});
	decimal.removeEventListener("click", updateNum, false);
	// truncating the number just in case.
	truncateNum();
	// reset the option.
	option = 0;
}

function updateNum(){
	if(!solved){
		display.textContent = "";
	}
	// checking if the value is a decimal. If not, proceed as normal.
	if (this.textContent !== "."){
		console.log("it is not a decimal.");
		secondVal += this.textContent;
		truncateNum();
		display.textContent = secondVal;
	} else if (this.textContent === "."){
		console.log("it is a decimal.");
		// if it is, proceed with our checks.
		if(secondVal.indexOf(".") === -1){
			console.log("no decimals in display.");
			console.log(secondVal);
			secondVal += this.textContent;
			truncateNum();
			display.textContent = secondVal;
		} else {
			console.log("too many decimals!");
			display.textContent = secondVal;
		}
	}
}

// a function to check the length of the current number.
function truncateNum(){
	if(display.textContent.length > 9){
		display.textContent = display.textContent.substring(0,9);
	}
	if(secondVal.length > 9){
		secondVal = secondVal.substring(0,9);
	}
}

function handleOperator(optval){
	equality();
	option = optval;
	solved = false;
	firstVal = display.textContent;
	// clearing the display.
	secondVal = "";
	nums.forEach(function(num){
		num.addEventListener("click", updateNum, false);
	});
	decimal.addEventListener("click", updateNum, false);
	// the first parameter is always the event e.
	equals.addEventListener("click", solve, false);

}

// Creating all numerical buttons.
for(var i = 0; i < 10; i++){
	let btn = document.createElement("button");
	let val = i;
	btn.classList.add("button_" + val, "number");
	btn.textContent = val;
	// Adding initial event listeners for all buttons.
	// If it's clicked, the number is added to the display.
	btn.addEventListener("click", function(){
		// If an expression was just solved, the display will be reset,
		// and then the program will continue as normal.
		if(!solved){
			display.textContent += val;
		} else if(solved){
			display.textContent = val;
			// resetting solved to false.
			solved = false;
		}
		truncateNum();
	});
	numSection.appendChild(btn);
}

// Selecting the entire set of numbers.
var nums = document.querySelectorAll(".number");

// creating a decimal button.
var decimal = document.createElement("button");
decimal.textContent = ".";
decimal.classList.add("decimal");
decimal.addEventListener("click", function(){
	console.log("adding a decimal");
		if(display.textContent.indexOf(".") === -1){
			console.log("no decimal here!");
			if(!solved){
				display.textContent += ".";
				truncateNum();
				// cutting off the number if it gets too long.
			} else if(solved){
				display.textContent = ".";
				// resetting solved to false.
				solved = false;
			}
		} else {
			console.log("This number already has a decimal. You cannot add another.");
		}
});
numSection.appendChild(decimal);

// creating the addition button.
createOperation("plus", "+", 1);

// creating the subtraction button.
createOperation("minus", "-", 2);

// creating the multiplication button.
createOperation("times", "x", 3);

// creating the division button.
createOperation("divide", "÷", 4);

// creating the equality button.
var equals = document.createElement("button");
equals.classList.add("equal");
equals.textContent = "=";
numSection.appendChild(equals);

// finally, creating a clear button as per the user stories.
// I am doing a hard refactor after this is complete.
var clear = document.createElement("button");
clear.textContent = "A/C";

clear.addEventListener("click", function(){
	console.log("clearing the display...");
	display.textContent = "";
	firstVal = "";
	secondVal = "";
	solved = false;
	option = 0;
	// resetting all of the event listeners on the buttons.
	nums.forEach(function(num){
		num.removeEventListener("click", updateNum, false);
	});
});

deleteSection.appendChild(clear);

// adding a "C" button that just clears the current number.
var del = document.createElement("button");
del.textContent = "C";

del.addEventListener("click", function(){
	console.log("going back a number");
	display.textContent = "";
	secondVal = "";
});

deleteSection.appendChild(del);