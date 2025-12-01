import type { Meta, StoryObj } from '@storybook/react';
import FeatureSection from './index';
import Button from '../../atoms/Button';
import MapIcon from '@fortawesome/fontawesome-free/svgs/solid/map-location-dot.svg?react';
import CalendarIcon from '@fortawesome/fontawesome-free/svgs/solid/calendar-check.svg?react';
import StarIcon from '@fortawesome/fontawesome-free/svgs/solid/star.svg?react';
import UserIcon from '@fortawesome/fontawesome-free/svgs/solid/user-doctor.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import HotelIcon from '@fortawesome/fontawesome-free/svgs/solid/hotel.svg?react';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';

const meta: Meta<typeof FeatureSection> = {
  title: 'Organisms/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof FeatureSection>;

export const Default: Story = {
  args: {
    title: 'Was wir bieten',
    subtitle: 'Features',
    features: [
      {
        icon: MapIcon,
        title: 'Entdecken',
        description: 'Finde die besten Orte in deiner Stadt - von Restaurants bis zu versteckten Geheimtipps.',
      },
      {
        icon: CalendarIcon,
        title: 'Buchen',
        description: 'Reserviere direkt über die App Tische in Restaurants oder Termine bei Services.',
      },
      {
        icon: StarIcon,
        title: 'Bewerten',
        description: 'Teile deine Erfahrungen und hilf anderen bei der Entscheidung.',
      },
    ],
  },
};

export const FourColumns: Story = {
  args: {
    title: 'Unsere Services',
    subtitle: 'Alles an einem Ort',
    columns: 4,
    features: [
      {
        icon: UtensilsIcon,
        title: 'Restaurants',
        description: 'Top-bewertete Restaurants für jeden Geschmack.',
      },
      {
        icon: HotelIcon,
        title: 'Hotels',
        description: 'Komfortable Unterkünfte in bester Lage.',
      },
      {
        icon: UserIcon,
        title: 'Ärzte',
        description: 'Schnelle Terminvereinbarung bei Fachärzten.',
      },
      {
        icon: CalendarIcon,
        title: 'Termine',
        description: 'Buche Friseur, Mechaniker und mehr.',
      },
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Warum DeutschlandApp?',
    columns: 2,
    features: [
      {
        icon: MapIcon,
        title: 'Lokale Expertise',
        description: 'Wir kennen jede Stadt in Deutschland und zeigen dir die besten Spots - von bekannten Highlights bis zu versteckten Geheimtipps.',
      },
      {
        icon: StarIcon,
        title: 'Echte Bewertungen',
        description: 'Verlasse dich auf authentische Bewertungen von echten Nutzern, die ihre Erfahrungen teilen.',
      },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: 'Entdecke beliebte Städte',
    subtitle: 'Städte',
    features: [
      {
        icon: MapIcon,
        title: 'Berlin',
        description: 'Die pulsierende Hauptstadt mit ihrer einzigartigen Kultur und Geschichte.',
        action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
      },
      {
        icon: MapIcon,
        title: 'Hamburg',
        description: 'Die Hansestadt mit maritimem Flair und lebendiger Musikszene.',
        action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
      },
      {
        icon: MapIcon,
        title: 'München',
        description: 'Bayerische Lebensart trifft auf moderne Großstadtkultur.',
        action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
      },
    ],
  },
};
