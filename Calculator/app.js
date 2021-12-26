const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let expression = "";
for (let button of buttons) {
	button.addEventListener("click", (evt) => {
		if (evt.target.innerText === "<") {
			expression = expression.slice(0, expression.length - 1);
		} else if (evt.target.innerText === "C") {
			expression = "";
		} else if (evt.target.innerText === "=") {
			expression = expression.replace("^", "**");
			expression = eval(expression);
			let num = parseFloat(expression);
			num = num.toFixed(2);
			expression = num.toString();
		} else {
			expression += evt.target.innerText;
		}
		screen.innerHTML = expression;
	});
}
