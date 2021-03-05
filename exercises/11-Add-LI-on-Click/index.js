let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var fourth = document.createElement("li");
	fourth.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(fourth);
});
