let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//the following code does not work because Your function is returning a string rather than the div node. appendChild can only append a node
	//var text = "<div>Hello World<div>";

	//document.getElementById("body").appendChild(text);

	var text = document.createElement("p"); // is a node
	text.style.background = "yellow";
	text.innerHTML = "Hello World";
	document.body.appendChild(text);
});
