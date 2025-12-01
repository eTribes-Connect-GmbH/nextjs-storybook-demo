import type { ComponentType, SVGProps, ReactNode } from 'react';
import './style.css';

export type Feature = {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  action?: ReactNode;
};

export type FeatureSectionProps = {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
};

const FeatureSection = ({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureSectionProps) => (
  <section className="feature-section">
    <div className="feature-section__container">
      {(title || subtitle) && (
        <div className="feature-section__header">
          {subtitle && <p className="feature-section__subtitle">{subtitle}</p>}
          {title && <h2 className="feature-section__title">{title}</h2>}
        </div>
      )}

      <div className={`feature-section__grid feature-section__grid--columns-${columns}`}>
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="feature-section__item">
              {IconComponent && (
                <div className="feature-section__icon">
                  <IconComponent />
                </div>
              )}
              <h3 className="feature-section__item-title">{feature.title}</h3>
              <p className="feature-section__item-description">{feature.description}</p>
              {feature.action && (
                <div className="feature-section__item-action">{feature.action}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeatureSection;
