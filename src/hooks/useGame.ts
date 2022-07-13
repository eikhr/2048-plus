import { createGame, Direction, Game, GameData, GameState } from '2048-engine';
import { useRef, useState } from 'react';

const useGame = (): Game & {
  reset: (gameData?: Partial<GameData>) => void;
} => {
  const game = useRef<Game>(createGame());

  const [gameState, setGameState] = useState<GameState>(
    game.current.currentState
  );

  return {
    ...game.current,
    currentState: gameState,
    move: (direction: Direction) => {
      const newState = game.current.move(direction);
      setGameState(newState);
      return newState;
    },
    reset: (gameData) => {
      game.current = createGame(gameData);
      setGameState(game.current.currentState);
    },
  };
};

export default useGame;
