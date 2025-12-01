import type { ComponentType, SVGProps } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import './style.css';

export type ServiceCardProps = {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  location?: string;
  availability?: string;
  imageUrl?: string;
  onBook?: () => void;
  onDetails?: () => void;
};

const ServiceCard = ({
  icon,
  title,
  category,
  rating,
  reviewCount,
  location,
  availability,
  imageUrl,
  onBook,
  onDetails,
}: ServiceCardProps) => {
  const IconComponent = icon;

  return (
    <div className="service-card">
      <Card>
        <div className="service-card__content">
          <div className="service-card__header">
            {IconComponent && (
              <div className="service-card__icon">
                <IconComponent />
              </div>
            )}
            <span className="service-card__category">{category}</span>
          </div>

          <h3 className="service-card__title">{title}</h3>

          {rating !== undefined && (
            <div className="service-card__rating">
              <span className="service-card__rating-value">★ {rating.toFixed(1)}</span>
              {reviewCount !== undefined && (
                <span className="service-card__rating-count">({reviewCount} Bewertungen)</span>
              )}
            </div>
          )}

          {location && (
            <div className="service-card__location">
              <span className="service-card__location-icon">📍</span>
              <span className="service-card__location-text">{location}</span>
            </div>
          )}

          {availability && (
            <div className="service-card__availability">
              <span className="service-card__availability-dot" />
              <span className="service-card__availability-text">{availability}</span>
            </div>
          )}

          <div className="service-card__actions">
            {onDetails && (
              <Button variant="outline" size="sm" onClick={onDetails}>
                Details
              </Button>
            )}
            {onBook && (
              <Button variant="primary" size="sm" onClick={onBook}>
                Buchen
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceCard;
