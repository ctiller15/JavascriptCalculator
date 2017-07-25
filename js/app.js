var display = document.querySelector(".display")
var calc = document.querySelector("div");

for(var i = 0; i < 9; i++){
	let btn = document.createElement("button");
	let val = i + 1;
	console.log(val);
	btn.classList.add("button_" + val);
	btn.textContent = val;
	btn.addEventListener("click", function(){
		console.log(val);
		display.textContent += val;
	});
	calc.appendChild(btn);
}