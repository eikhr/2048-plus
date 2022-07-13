import styles from './Button.module.css';
import {
  forwardRef,
  ForwardRefRenderFunction,
  MouseEventHandler,
  ReactNode,
} from 'react';

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, onClick },
  ref
) => {
  return (
    <button ref={ref} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default forwardRef<HTMLButtonElement, Props>(Button);
