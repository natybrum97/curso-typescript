
import { Game, Games } from "../protocols/types";

const game: Game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. também pode ser vazio
  }
  
  const games: Games[]  = [game];
  
  function play(game: Game){
    // runs the game
    console.log(game);
  }