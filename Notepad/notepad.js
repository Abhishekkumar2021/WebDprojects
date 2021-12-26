const textarea = document.querySelector("textarea");
textarea.addEventListener("input", () => {
	const text = textarea.value;
	localStorage.setItem("text", text);
});
let lastUsedColour = "black";

const colours = [
	"black",
	"teal",
	"magenta",
	"green",
	"blue",
	"gray",
	"orange",
	"red",
];
const col = document.querySelector(".colours");
for (let i = 0; i < colours.length; i++) {
	const newColour = document.createElement("div");
	newColour.setAttribute("class", "color");
	newColour.style.background = colours[i];
	col.append(newColour);
}
const allcolors = document.querySelectorAll(".color");
for (let i = 0; i < allcolors.length; i++) {
	allcolors[i].addEventListener("click", () => {
		textarea.style.color = colours[i];
		lastUsedColour = colours[i];
		localStorage.setItem("color", lastUsedColour);
	});
}
textarea.style.color = localStorage.getItem("color");
const search = document.querySelector("#search");
const button = document.querySelector(".button");
button.addEventListener("click", () => {
	const text = textarea.value;
	const toSearch = search.value;
	const replace = document.querySelector("#replace").value;
	const reg = new RegExp(toSearch, "g");
	let object = reg.exec(text);
	if (object) {
		console.log(object);
	} else {
		console.log("Not there");
	}
	let ans = text.replace(reg, replace);
	textarea.value = ans;
	localStorage.setItem("text", ans);
});
textarea.value = localStorage.getItem("text");
