import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js";
import { Pop } from "../Utils/Pop.js"

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/tay/pokemon',
    timeout: 12000
})


class SeenPokemonService{

    async getSeenPokemon(){
        try{
            const res = await sandboxApi.get()
            console.log(res.data, 'getSeenPokemon res from the Service');
            ProxyState.seenPokemon = res.data.map(p => new Pokemon(p))
            console.log(ProxyState.seenPokemon, 'seen pokemon after get in service');
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }



    }

    async register() {
        let pokemon = ProxyState.selectedPokemon
        try {
            const res = await sandboxApi.post('', pokemon)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
        
    }

}

export const seenPokemonService = new SeenPokemonService