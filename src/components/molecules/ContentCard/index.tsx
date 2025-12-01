import Link from 'next/link';
import type { ReactNode } from 'react';
import './style.css';

export type ContentCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  href?: string;
  highlights?: string[];
  actions?: ReactNode;
  badge?: ReactNode;
};

const ContentCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  href,
  highlights = [],
  actions,
  badge,
}: ContentCardProps) => {
  const content = (
    <>
      <div className="content-card__image-wrapper">
        <img src={imageUrl} alt={title} className="content-card__image" />
        {badge && <div className="content-card__badge">{badge}</div>}
        <div className="content-card__overlay" />
      </div>
      <div className="content-card__content">
        <div className="content-card__header">
          <h3 className="content-card__title">{title}</h3>
          {subtitle && <span className="content-card__subtitle">{subtitle}</span>}
        </div>
        <p className="content-card__description">{description}</p>
        {highlights.length > 0 && (
          <ul className="content-card__highlights">
            {highlights.map((highlight, index) => (
              <li key={index} className="content-card__highlight">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {actions && <div className="content-card__actions">{actions}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="content-card">
        {content}
      </Link>
    );
  }

  return <div className="content-card">{content}</div>;
};

export default ContentCard;
