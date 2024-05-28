// selectors po
const pokeName = document.getElementById('pokeName')
const pokeForm = document.getElementById('pokeForm')
const pokeImage = document.getElementById('pokeImage')
const pokeInfo = document.getElementById('pokeInfo')

const getPokemon = (e) => {
    e.preventDefault();
    console.log(pokeName.value)
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName.value.toLowerCase())
      .then(res => res.json())
      .then(data => {
        pokeImage.src = data.sprites.other['official-artwork'].front_default
        let name = data.species.name
        pokeInfo.innerHTML = "This Pokemon is " + name
      })
}

fetch ("https://pokeapi.co/api/v2/pokemon?limit=1279")
 .then(res => res.json())
 .then(data => {
     for(let p of data.results){
        pokeName.innerHTML += "<option value=" +  p.name +">" + p.name.charAt(0).toUpperCase() + p.name.slice(1) + "</option>"
     }

 })

pokeForm.addEventListener('submit', getPokemon)
