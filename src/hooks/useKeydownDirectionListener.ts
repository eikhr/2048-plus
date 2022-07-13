import { useMemo } from 'react';
import { Direction } from '2048-engine';
import useKeydownListener from './useKeydownListener';
import getKeyEvtDirection from '../utils/getKeyEvtDirection';

interface Options {
  preventDefault?: boolean;
}

const useKeydownDirectionListener = (
  handler: (direction: Direction) => void,
  options: Options = {}
) => {
  const { preventDefault = true } = options;

  const keydownHandler = useMemo(() => {
    return (e: KeyboardEvent) => {
      preventDefault && e.preventDefault();
      const direction = getKeyEvtDirection(e);
      direction !== undefined && handler(direction);
    };
  }, [handler, preventDefault]);

  useKeydownListener(keydownHandler);
};

export default useKeydownDirectionListener;
