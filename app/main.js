import { WildPokemonController } from "./Controllers/WildPokemonController.js";
import { SeenPokemonController} from "./Controllers/SeenPokemonController.js"

class App {
  wildPokemonController = new WildPokemonController();
  seenPokemonController = new SeenPokemonController();
}

window["app"] = new App();
