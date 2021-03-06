import styles from './GameHeader.module.css';
import ScoreBox from '../ScoreBox';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  score: number;
  controls: ReactNode;
}

const GameHeader: FunctionComponent<Props> = ({ score, controls }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>2048+</div>
          <div className={styles.subTitle}>normal</div>
        </div>
      </div>
      <div className={styles.score}>
        <ScoreBox label="High Score" score={score} />
        <ScoreBox label="Score" score={score} />
      </div>
      <div className={styles.controls}>{controls}</div>
    </div>
  );
};

export default GameHeader;
