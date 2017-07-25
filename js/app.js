var calc = document.querySelector("div");

for(var i = 0; i < 9; i++){
	let btn = document.createElement("button");
	btn.classList.add("button" + i + 1);
	calc.appendChild(btn);
}