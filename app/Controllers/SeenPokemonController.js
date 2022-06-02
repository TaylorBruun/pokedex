import { ProxyState } from "../AppState.js";
import { seenPokemonService } from "../Services/SeenPokemonService.js";
import { Pop } from "../Utils/Pop.js";

function _drawSeen(){
let seen = ProxyState.seenPokemon
let template = ''
seen.forEach(p => template += p.SeenTemplate)
document.getElementById('seen-pokemon').innerHTML = template

}

export class SeenPokemonController{
    constructor(){
        ProxyState.on('seenPokemon', _drawSeen)
        this.getSeenPokemon()
    }

   
    async getSeenPokemon(){
        try{
            await seenPokemonService.getSeenPokemon()
        } catch (error){
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async register(){
        try{
            await seenPokemonService.register()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
        let registerTarget = ProxyState.selectedPokemon
        ProxyState.seenPokemon = [...ProxyState.seenPokemon, registerTarget]
    }
    seenInfo(id){
        let found = ProxyState.seenPokemon.find(p => p.id == id)
        console.log('found', found);
        ProxyState.selectedPokemon = found
    }
}