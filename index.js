//-------------------------V---el nom del ditto-----V--------------

// const getName = async () => { // l'async es perque sapiga que s haura d anar esperant
//     let pokeName;
//     const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); //fetch carrega la info d'un enllaç
//     //es una funció que retorna una promesa. On hi hagi una promesa caldrà esperar i per tant ferla asincrona
//     const data = await pokemon.json()
//     pokeName = (data.name);
//     return pokeName;
// }
// getName();

//-------------------------V---la foto del ditto-----V--------------

// const getImage = async () => { // l'async es perque sapiga que s haura d anar esperant
//     let pokeImage;
//     const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); //fetch carrega la info d'un enllaç
//     //es una funció que retorna una promesa. On hi hagi una promesa caldrà esperar i per tant ferla asincrona
//     const data = await pokemon.json()
//     pokeImage = (data.sprites);
//     return pokeImage;
// }
// getImage();

//-------------------------V---tota la info de tots els pokemons-----V--------------
// const pokeArr = [];

// const getData = async (id) => { // l'async es perque sapiga que s haura d anar esperant
//     for (let i = 0; i < id; i++) {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id); //fetch carrega la info d'un enllaç

//         //es una funció que retorna una promesa. On hi hagi una promesa caldrà esperar i per tant ferla asincrona
//         const data = await response.json()
//         pokeArr.push(data);
//     }
//     return pokeArr
// }
// console.log(pokeArr);

// getData(151)



//Crear les variables que necessitaré
let pokeName, pokeImage;

//extreure l'input
const input = document.querySelector('#input');
input.addEventListener('keyup', async (e) => {
    e.preventDefault();
    for (let i = 0; i < 151; i++) {
    const id = input.value;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id); //fetch carrega la info d'un enllaç

    //obtenir el nom i la imatge
    const data = await response.json();
    pokeName = data.name;
    pokeImage = data.sprites.front_default;
    getMyPokemon(pokeName, pokeImage);
    }
})

//col·locar al info al HTML
const getMyPokemon = async (name, img) => { // l'async es perque sapiga que s haura d anar esperant
    document.querySelector('#mostrar').innerHTML = `<li class="creat"> <img src="${img}"><p>${name}</p> </li>`;
}
