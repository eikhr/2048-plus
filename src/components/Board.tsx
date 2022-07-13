import React, { FunctionComponent, useEffect } from 'react';
import { useRef } from 'react';
import { createBoard } from '2048-board-renderer';
import { Board } from '2048-engine';
import useInitialize from '../hooks/useInitialize';

interface Props {
  boardState: Board;
}

// TODO: this should be exported from 2048-board-renderer
interface GameBoard {
  htmlElement: HTMLElement;
  update(boardState: Board): void;
}

const Board: FunctionComponent<Props> = ({ boardState }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const board = useRef<GameBoard>();

  useInitialize(() => {
    board.current = createBoard(boardState);
    const divElement = elementRef.current;
    const boardElement = board.current.htmlElement;
    divElement?.appendChild(boardElement);
    return () => {
      divElement?.removeChild(boardElement);
    };
  });

  useEffect(() => {
    board.current?.update(boardState);
  }, [boardState]);

  return <div ref={elementRef} />;
};

export default Board;
