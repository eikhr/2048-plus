import useGame from '../hooks/useGame';
import Board from './Board';
import useKeydownDirectionListener from '../hooks/useKeydownDirectionListener';

const NormalGame = () => {
  const game = useGame();
  useKeydownDirectionListener((direction) => game.move(direction));

  return <Board boardState={game.currentState.board} />;
};

export default NormalGame;
