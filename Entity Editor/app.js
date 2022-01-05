const screen = document.getElementById("screen");
const buttons = document.getElementById("buttons");

let code = "";
for (let i = 33; i < 190; i++) {
	if (
		i == 127 ||
		i == 129 ||
		i == 141 ||
		i == 143 ||
		i == 144 ||
		i == 173 ||
		i == 157
	)
		continue;
	const button = document.createElement("button");
	button.innerHTML = `&#${i};`;
	buttons.append(button);
}

const buttonArray = document.getElementsByTagName("button");
for (let button of buttonArray) {
	button.addEventListener("click", (evt) => {
		button.style.background = randomColor();
		screen.innerText += button.innerText;
	});
}
const remove = document.getElementById("remove");
const clear = document.getElementById("clear");

clear.addEventListener("click", (evt) => {
	screen.innerText = "";
});
remove.addEventListener("click", (evt) => {
	const str = screen.innerText;
	screen.innerText = `${str.slice(0, str.length - 1)}`;
});

const body = document.querySelector("body");
body.addEventListener("keypress", (evt) => {
	if (evt.key !== "Enter") {
		for (let btn of buttonArray) {
			if (btn.innerText == evt.key) {
				btn.style.background = randomColor();
			}
		}
		screen.innerText += evt.key;
	}
});

const randomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = 0.05;
	return `rgb(${r}, ${g}, ${b},${a})`;
};
