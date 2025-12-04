import type { ReactNode } from 'react';
import './style.css';

type GridProps = {
  children: ReactNode;
  minWidth?: string;
  gap?: string;
};

const Grid = ({ children, minWidth = '300px', gap = 'var(--spacing-6)' }: GridProps) => (
  <div
    className='grid'
    style={{
      gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
      gap,
    }}
  >
    {children}
  </div>
);

export default Grid;
