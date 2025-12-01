import type { ReactNode } from 'react';
import Button from '../../atoms/Button';
import ContentCard from '../ContentCard';

export type CityCardProps = {
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  href: string;
  highlights?: string[];
  ctaLabel?: string;
  badge?: ReactNode;
};

const CityCard = ({
  name,
  region,
  description,
  imageUrl,
  href,
  highlights = [],
  ctaLabel = 'Entdecken',
  badge,
}: CityCardProps) => (
  <ContentCard
    title={name}
    subtitle={region}
    description={description}
    imageUrl={imageUrl}
    href={href}
    highlights={highlights}
    badge={badge}
    actions={
      <Button variant="outline" size="sm" fullWidth>
        {ctaLabel}
      </Button>
    }
  />
);

export default CityCard;
