const colours = [
	"lightgreen",
	"skyblue",
	"purple",
	"violet",
	"teal",
	"orange",
	"red",
];
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const create = document.querySelector(".create");
create.addEventListener("click", () => {
	const newNote = document.createElement("div");
	newNote.setAttribute("class", "card");
	newNote.innerHTML = '<textarea name="note" id="note"></textarea>';
	const title = document.createElement("div");
	title.setAttribute("class", "title");
	const input = document.createElement("input");
	input.setAttribute("class", "titlebar");
	title.append(input);
	newNote.append(title);
	const cut = document.createElement("div");
	cut.setAttribute("class", "cut button");
	newNote.append(cut);
	const minimize = document.createElement("div");
	minimize.setAttribute("class", "minimize button");
	newNote.append(minimize);
	const maximize = document.createElement("div");
	maximize.setAttribute("class", "maximize button");
	newNote.append(maximize);
	newNote.style.top = Math.random() * 570 + "px";
	newNote.style.left = Math.random() * 1260 + "px";
	newNote.style.background =
		colours[Math.floor(Math.random() * colours.length)];
	container.append(newNote);
});
container.addEventListener("click", (event) => {
	const cut = document.querySelectorAll(".cut");
	for (let i = 0; i < cut.length; i++) {
		cut[i].addEventListener("click", () => {
			cut[i].parentElement.style.transform = "scale(0)";
		});
	}
	const maximize = document.querySelectorAll(".maximize");
	for (let i = 0; i < maximize.length; i++) {
		maximize[i].addEventListener("click", () => {
			maximize[i].parentElement.style.transform = "scale(1)";
		});
	}
	const minimize = document.querySelectorAll(".minimize");
	for (let i = 0; i < minimize.length; i++) {
		minimize[i].addEventListener("click", () => {
			minimize[i].parentElement.style.transform = "scale(0.5)";
		});
	}
	const searchButton = document.querySelector(".searchButton");
	searchButton.addEventListener("click", () => {
		const cards = document.querySelectorAll(".card");
		const titles = document.querySelectorAll(".titlebar");
		let searchbar = document.querySelector(".searchbar");
		const toSearch = searchbar.value.trim();
		for (let i = 0; i < titles.length; i++) {
			if (titles[i].value.trim() === toSearch) {
				cards[i].style.transform = "scale(1.5)";
			}
		}
	});
});
const shuffle = document.querySelector(".shuffle");
shuffle.addEventListener("click", () => {
	const cards = document.querySelectorAll(".card");
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.top = Math.random() * 570 + "px";
		cards[i].style.left = Math.random() * 1260 + "px";
	}
});
