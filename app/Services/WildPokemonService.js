import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

class WildPokemonService{
    checkArray() {
        console.log(ProxyState.wildPokemon);
    }
    async getPokemon(){
        // Hardcode in a limit of 721 because only the first 6 generations of games really exist
        const res = await pokemonApi.get(''+'?limit=721')
        console.log('here are the pokemon', res.data);
        ProxyState.wildPokemon = res.data.results.map(w => w)
        console.log('mapped results to proxystate', ProxyState.wildPokemon);
    }


    async getPokemonInfo(url) {
        console.log('hitting WP service getpokemoninfo');
        const res = await pokemonApi.get(url.toString())
        console.log('got some details', res.data);
        ProxyState.selectedPokemon = new Pokemon(res.data)
        console.log(ProxyState.selectedPokemon, 'here is the selected');        
        
        
    }
}


export const wildPokemonService = new WildPokemonService