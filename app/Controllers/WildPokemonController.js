import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

import { wildPokemonService } from "../Services/WildPokemonService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
    console.log('calling controller draw');
    let wilds = ProxyState.wildPokemon
    let template = ''
    wilds.forEach(w => template += Pokemon.WildTemplate(w))
    document.getElementById('wild-pokemon').innerHTML = template
}

function _drawSelected(){
    console.log("calling controller draw selected");
    let selected = ProxyState.selectedPokemon
    document.getElementById('pokemon-info').innerHTML = selected.InfoTemplate

}

export class WildPokemonController{
    constructor(){
        console.log('hitting WP constructor');
        ProxyState.on('wildPokemon', _draw)
        ProxyState.on('selectedPokemon', _drawSelected)
        this.getPokemon()
        _draw()
    }

   async getPokemon(){
       try {
            console.log('hitting WP getPokemon()');
            await wildPokemonService.getPokemon()
       }
       catch (error){
        console.error(error)
        Pop.toast(error.message, 'error')
       }
    }

    checkArray(){
        wildPokemonService.checkArray()
    }


    async getPokemonInfo(url){
        wildPokemonService.getPokemonInfo(url)
    }
}


