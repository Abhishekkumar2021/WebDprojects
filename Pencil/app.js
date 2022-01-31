//state variable
let isEditing = false;
const body = document.querySelector("body");
body.addEventListener("mousedown", () => {
	isEditing = true;
});
body.addEventListener("mouseup", () => {
	isEditing = false;
});

body.addEventListener("mousemove", (e) => {
	if (isEditing) {
		const div = document.createElement("div");
		div.style.top = e.y - 5 + "px";
		div.style.left = e.x - 5 + "px";
		body.append(div);
	}
});
