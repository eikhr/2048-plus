import { Direction } from '2048-engine';

const getKeyEvtDirection = (e: KeyboardEvent): Direction | void => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w': {
      return Direction.UP;
    }
    case 'ArrowDown':
    case 's': {
      return Direction.DOWN;
    }
    case 'ArrowLeft':
    case 'a': {
      return Direction.LEFT;
    }
    case 'ArrowRight':
    case 'd': {
      return Direction.RIGHT;
    }
    default: {
      return;
    }
  }
};

export default getKeyEvtDirection;
