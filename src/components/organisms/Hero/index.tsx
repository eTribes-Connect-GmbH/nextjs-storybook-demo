import type { ReactNode } from 'react';
import './style.css';

export type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
  align?: 'left' | 'center';
};

const Hero = ({
  title,
  subtitle,
  description,
  actions,
  backgroundImage,
  overlay = false,
  align = 'center',
}: HeroProps) => {
  const heroClass = [
    'hero',
    backgroundImage && 'hero--with-background',
    overlay && 'hero--with-overlay',
    `hero--align-${align}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={heroClass}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="hero__container">
        <div className="hero__content">
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          <h1 className="hero__title">{title}</h1>
          {description && <p className="hero__description">{description}</p>}
          {actions && <div className="hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
