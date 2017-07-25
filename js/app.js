var display = document.querySelector(".display")
var calc = document.querySelector("div");

function equality(first, second, op){
	// setting up all of the operations. 1 is addition
	if(op === 1){
		sum = first + second;
		display.textContent = sum;
		console.log(sum);
		return sum;
	}
	// 2 is subtraction.
	// 3 is multiplication.
	// 4 is division.
}

// Creating all numerical buttons.
for(var i = 0; i < 9; i++){
	let btn = document.createElement("button");
	let val = i + 1;
	console.log(val);
	btn.classList.add("button_" + val);
	btn.classList.add("number");
	btn.textContent = val;
	btn.addEventListener("click", function(){
		console.log(val);
		display.textContent += val;
	});
	calc.appendChild(btn);
}

var nums = document.querySelectorAll(".number");


var plus = document.createElement("button");
plus.textContent = "+";

var equals = document.createElement("button");
equals.classList.add("equal");
equals.textContent = "=";
console.log(equals);

plus.addEventListener("click", function(){
	firstVal = display.textContent;
	console.log(firstVal);
	// clearing the display.
	display.textContent = "";
	var combinedVal = "";
	nums.forEach(function(num){
		num.addEventListener("click", function(){
			combinedVal += this.textContent;
			console.log("adding " + combinedVal);
		});
	});
	// the first parameter is always the event e.
	equals.addEventListener("click", function(){
		equality(Number(firstVal), Number(combinedVal), 1);
		// clearing the display, as well as all of the values.
		firstVal = "";
		combinedVal = "";
	});
});

calc.appendChild(plus);
calc.appendChild(equals);

