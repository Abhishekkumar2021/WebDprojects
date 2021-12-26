let num = 1;
const addNewBox = () => {
	if (num <= 50) {
		const container = document.querySelector(".container");
		let box = document.createElement("div");
		box.classList.add("box");
		box.classList.add("center");
		box.innerHTML = num;
		num++;
		container.append(box);
	}
};
const removeBox = () => {
	if (num >= 1) {
		const boxes = document.querySelectorAll(".box");
		boxes[boxes.length - 1].remove();
		num--;
	}
};
const randomColor = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgba(${red},${green},${blue},0.5)`;
};
const body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
	if (event.key == "Enter") addNewBox();
	if (event.key == "Backspace") removeBox();
});
