import useGame from '../hooks/useGame';
import Board from './Board';
import useKeydownDirectionListener from '../hooks/useKeydownDirectionListener';
import GameHeader from './GameHeader';
import Button from './Button';
import { useState } from 'react';

const NormalGame = () => {
  const [gameId, setGameId] = useState(0);

  const game = useGame();
  useKeydownDirectionListener((direction) => game.move(direction));

  return (
    <div>
      {game.currentState.status.hasPossibleMoves + ''}
      <GameHeader
        score={game.currentState.score}
        controls={
          <Button
            onClick={() => {
              setGameId(gameId + 1);
              game.reset();
            }}
          >
            New Game
          </Button>
        }
      />
      <Board key={gameId} boardState={game.currentState.board} />
    </div>
  );
};

export default NormalGame;
