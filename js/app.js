var display = document.querySelector(".display")
var calc = document.querySelector("div");
var firstVal = "";
var secondVal = "";
var option = 0;
var solved = false;


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
	// reset the option.
	option = 0;
}

function updateNum(){
	if(!solved){
		display.textContent = "";
	}
	secondVal += this.textContent;
	display.textContent = secondVal;
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
	// the first parameter is always the event e.
	equals.addEventListener("click", solve, false);

}

// Creating all numerical buttons.
for(var i = 0; i < 10; i++){
	let btn = document.createElement("button");
	let val = i;
	btn.classList.add("button_" + val);
	btn.classList.add("number");
	btn.textContent = val;
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
	});
	calc.appendChild(btn);
}

// Selecting the entire set of numbers.
var nums = document.querySelectorAll(".number");

// creating a decimal button.
var decimal = document.createElement("button");
decimal.textContent = ".";

// creating the addition button.
var plus = document.createElement("button");
plus.textContent = "+";

// creating the subtraction button.
var minus = document.createElement("button");
minus.textContent = "-";

// creating the multiplication button.
var times = document.createElement("button");
times.textContent = "x";

// creating the division button.
var divide = document.createElement("button");
divide.textContent = "/";

// creating the equality button.
var equals = document.createElement("button");
equals.classList.add("equal");
equals.textContent = "=";

// finally, creating a clear button as per the user stories.
// I am doing a hard refactor after this is complete.
var clear = document.createElement("button");
clear.textContent = "A/C";

decimal.addEventListener("click", function(){
	console.log("adding a decimal");
		if(display.textContent.indexOf(".") === -1){
			if(!solved){
				display.textContent += ".";
				secondVal += this.textContent;
				//display.textContent = secondVal;
			} else if(solved){
				display.textContent = ".";
				secondVal += ".";
				// resetting solved to false.
				solved = false;
			}
		} else {
			console.log("This number already has a decimal. You cannot add another.");
		}
	console.log(secondVal);
});

plus.addEventListener("click", function(){
	handleOperator(1);
});

minus.addEventListener("click", function(){
	handleOperator(2);
});

times.addEventListener("click", function(){
	handleOperator(3);
});

divide.addEventListener("click", function(){
	handleOperator(4);
});

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

calc.appendChild(decimal);
calc.appendChild(plus);
calc.appendChild(minus);
calc.appendChild(times);
calc.appendChild(divide);
calc.appendChild(equals);
calc.appendChild(clear);

