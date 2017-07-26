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
		console.log("We will subtract now.");
		diff = Number(firstVal) - Number(secondVal);
		finishEquation(diff);
	}
	// 3 is multiplication.
	// 4 is division.
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

// creating the addition button.
var plus = document.createElement("button");
plus.textContent = "+";

// creating the subtraction button.
var minus = document.createElement("button");
minus.textContent = "-";

// creating the equality button.
var equals = document.createElement("button");
equals.classList.add("equal");
equals.textContent = "=";

plus.addEventListener("click", function(){
	handleOperator(1);
});

minus.addEventListener("click", function(){
	handleOperator(2);
});

calc.appendChild(plus);
calc.appendChild(minus);
calc.appendChild(equals);

