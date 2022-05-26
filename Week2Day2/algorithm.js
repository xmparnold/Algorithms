var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// console log all pokemon objects with an id divisible by 3
function isDivisible () {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].id % 3 === 0) {
            console.log(pokemon[i]);
        }
    }
}


// console log pokemon objects that have more than one type
function numTypes() {
    for(var i=0; i<pokemon.length; i++) {

        if(pokemon[i].types.length > 1) {
            console.log(pokemon[i]);
        }
    }
}

// console log the names of the pokemon whos only type is poison
function onlyPoison() {
    for(var i=0; i<pokemon.length; i++) {

        if(pokemon[i].types[0] === "poison" && pokemon[i].types.length == 1) {
            console.log(pokemon[i].name);
        }
    }
}


//console log the first type of all the pokemon whos second type is flying
function secFlying() {
    for(var i=0; i<pokemon.length; i++) {

        if(pokemon[i].types[1] === "flying") {
            console.log(pokemon[i].types[0]);
        }
    }
}

// console log the reverse of the name of all pokemons whos only type is poison
function reverseName() {
    for(var i=0; i<pokemon.length; i++) {

        if(pokemon[i].types[0] === "poison" && pokemon[i].types.length == 1) {
            var str = pokemon[i].name;
            var res = str.split("");
            res.reverse();
            str = res.join("");
            console.log(str);
        }
    }
}



secFlying();