import { connection } from "../database/database";
import { Game, CreateGame } from "../protocols/game-protocol";

//const games: Game[] = [];

async function getGames() {
  const resultGetGames = await connection.query<Game[]>(`SELECT * FROM games`);
  return resultGetGames.rows;
}

async function createGame(game: CreateGame) {
  const resultPostGames = await connection.query<CreateGame>(
    `
    INSERT INTO games (title, platform)
    VALUES ($1,$2)
    `,
    [game.title, game.platform]
  );
  return resultPostGames.rows[0];
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const resultExistGame = await connection.query<Game>(
    `
    SELECT * FROM games WHERE title=$1 AND platform=$2
  `,
    [game.title, game.platform]
  );

  if (resultExistGame.rowCount > 0) {
    return true;
  } else {
    return false;
  }
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;