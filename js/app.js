var display = document.querySelector(".display")
var calc = document.querySelector("div");
var firstVal = "";
var secondVal = "";
var option = 0;


function equality(){
	// setting up all of the operations. 1 is addition
	if(option === 1){
		sum = Number(firstVal) + Number(secondVal);
		display.textContent = sum;
		firstVal = "";
		secondVal = "";
	}
	// 2 is subtraction.
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
	secondVal += this.textContent;
	console.log(secondVal);
	console.log("I will be here until the event is removed!");
}

// Creating all numerical buttons.
for(var i = 0; i < 9; i++){
	let btn = document.createElement("button");
	let val = i + 1;
	btn.classList.add("button_" + val);
	btn.classList.add("number");
	btn.textContent = val;
	btn.addEventListener("click", function(){
		display.textContent += val;
	});
	calc.appendChild(btn);
}

// Selecting the entire set of numbers.
var nums = document.querySelectorAll(".number");


var plus = document.createElement("button");
plus.textContent = "+";

var equals = document.createElement("button");
equals.classList.add("equal");
equals.textContent = "=";

plus.addEventListener("click", function(){
	equality();
	option = 1;
	firstVal = display.textContent;
	// clearing the display.
	display.textContent = "";
	secondVal = "";
	nums.forEach(function(num){
		num.addEventListener("click", updateNum, false);
	});
	// the first parameter is always the event e.
	equals.addEventListener("click", equality, false);
});

calc.appendChild(plus);
calc.appendChild(equals);

