

export class Pokemon{
    constructor(data){
        this.id = data.id
        // TODO consider a popover or something to assign a nickname when caught
        this.nickName = data.name
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        //These are hardcoded to positions 0 and 1 because pokemon can only have at most two types. Would need to be rethought if gamefreak did something like retroactive (because I am narrowing to pre-GenVII) triple typing. 
        this.types = data.types[0]?.type?.name + (data.types[1]?.type.name ?? '') ?? data.types[0]
        this.img = data.sprites?.other['official-artwork']?.front_default || data.img

    }

    static WildTemplate(pokemon){
        return `
        <h2 class='selectable' onclick="app.wildPokemonController.getPokemonInfo('${pokemon.url}')">${pokemon.name}</h2>
        `
    }
    get InfoTemplate() {
        return `
              <div style=""><img class='img-fluid' src="${this.img}" alt=""></div>
              <h4>${this.name}</h4>
              <h5>Types: ${this.types}</h5>
              <h5>Height: ${this.height}</h5>
              <h5>Weight: ${this.weight}</h5>
              <button onclick="app.seenPokemonController.register()" class="text-center btn btn-warning">Register</button>
            </div>
            `
    }    

    get SeenTemplate(){
        return`
        <h2 class="selectable" onclick="app.seenPokemonController.seenInfo('${this.id}')"><b onclick='console.log('circle works')' class="empty-pokeball mdi mdi-circle-outline"></b>${this.name}</h2>
        `
    }
    
}