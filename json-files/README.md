## Summary of files

#### svlist.json  
contains data for pokemons available in gen 9.  
Current version contains name and type. In the future moves and abilities may be added.  
All pokemons are inside the pokemonlist element, which is an array.  
A pokemon is stored following this pattern: {"name": "insert-name","type1": "insert-type","type2": "insert-type"}.  

#### version.json  
contains version data and dev variables for testing.  
version contains the current version of the json and is used to determine if the data in local storage needs to be updated or not.  
forceupdate is used to force a json update even if the version matches with the already stored json, which is useful for testing.
