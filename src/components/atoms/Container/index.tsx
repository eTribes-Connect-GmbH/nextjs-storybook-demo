import type { ReactNode } from 'react';
import './style.css';

type ContainerProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const Container = ({ children, size = 'xl' }: ContainerProps) => (
  <div className={`container container--${size}`}>{children}</div>
);

export default Container;
