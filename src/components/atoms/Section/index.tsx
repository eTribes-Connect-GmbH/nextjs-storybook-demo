import type { ReactNode } from 'react';
import './style.css';

type SectionProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  id?: string;
};

const Section = ({ children, variant = 'primary', id }: SectionProps) => (
  <section className={`section section--${variant}`} id={id}>{children}</section>
);

export default Section;
