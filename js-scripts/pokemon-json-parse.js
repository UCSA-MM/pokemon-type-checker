var pokemonNameList = document.getElementById("pokemon-name-datalist");
var request = new XMLHttpRequest();

request.onreadystatechange = function(response) 
{
	if (request.readyState === 4) 
	{
		if (request.status === 200)
		{
			var jsonFile = JSON.parse(request.responseText);
			jsonFile.pokemonlist.forEach(function(pokemon) 
			{
				var option = document.createElement("option");
				option.value = pokemon.name;
				pokemonNameList.appendChild(option);
			})
		}
	}
}

request.open("GET", "json-files/svlist.json", true);
request.send();