export const pokemonIds = [ 1, 20, 30, 34, 66 ];

pokemonIds.push( +'1' );

console.log(pokemonIds);

export const pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

console.log(pokemon);

interface Pokemon {
    id: number;
    name: string;
    age: number | undefined;
    tail?: string; // Atributo opcional
}

export const bulbasaur: Pokemon  = {
    id: 1,
    name: 'Bulbasaur',
    age: 26
}

console.log(bulbasaur);

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 15
}