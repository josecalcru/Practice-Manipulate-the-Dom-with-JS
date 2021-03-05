var countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
window.onload = function() {
	console.log("The website was loaded...");

	//mySelect
	//document.querySelector("#mySelect").appendChild("jeee");

	// var newCountries = document.createElement("option")

	countries.forEach(myFunction1);

	function myFunction1(item, index) {
		var newCountry = document.createElement("option");

		newCountry.innerHTML = item;

		console.log(newCountry);

		document.querySelector("#mySelect").appendChild(newCountry);
	}

	document.getElementById("change").addEventListener("click", myFunction);

	function myFunction() {
		document.getElementById("change").innerHTML = "YOU CLICKED ME!";
		let selectElement = document.querySelector("#mySelect");

		var selVal = document.getElementById("mySelect").value;

		//selectElement.addEventListener("change", event => {
		alert(selVal);
		//});

		//return document.querySelector("#mySelect").appendChild(newCountry);
	}
};

//newCountries.innerHTML = countries;
//document.querySelector("#mySelect").appendChild(newCountries);

//<option value="4">Select your country2</option>

// your code here
