import type { ReactNode } from 'react';
import './style.css';

type SectionProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

const Section = ({ children, variant = 'primary' }: SectionProps) => (
  <section className={`section section--${variant}`}>{children}</section>
);

export default Section;
