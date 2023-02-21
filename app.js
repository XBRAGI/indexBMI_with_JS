let height = document.getElementById("height");
let weight = document.getElementById("weight");
const BUTTON = document.getElementById("button");
let result = document.getElementById("result");

BUTTON.onclick = function(clickButton) {
	let bmi = (weight.value / (height.value / 100) ** 2).toFixed(1);
	result.textContent = bmi;
	height.value = '';
	weight.value = '';
	let div = document.getElementById("android");
	let icon = document.createElement("i");
	icon.classList.add("bi", "bi-android2", "ko-android");
	div.appendChild(icon);
	if (bmi < 18.5) {
		icon.classList.add("blue");
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		icon.classList.add("green");
	} else if (bmi >= 25 && bmi <= 29.9) {
		icon.classList.add("yellow");
	} else {
		icon.classList.add("red");
	}
	div.onclick = function(del) {
		div.classList.add("dis-none")
	}
}