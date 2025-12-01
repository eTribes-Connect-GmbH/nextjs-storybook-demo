import type { Metadata } from 'next';
import Button from '@/components/atoms/Button';
import ContentCard from '@/components/molecules/ContentCard';
import Hero from '@/components/organisms/Hero';
import FeatureSection from '@/components/organisms/FeatureSection';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import HotelIcon from '@fortawesome/fontawesome-free/svgs/solid/hotel.svg?react';
import ShipIcon from '@fortawesome/fontawesome-free/svgs/solid/ship.svg?react';
import MusicIcon from '@fortawesome/fontawesome-free/svgs/solid/music.svg?react';
import WaterIcon from '@fortawesome/fontawesome-free/svgs/solid/water.svg?react';
import TheaterIcon from '@fortawesome/fontawesome-free/svgs/solid/masks-theater.svg?react';

export const metadata: Metadata = {
  title: 'Hamburg',
  description: 'Erkunde Hamburg - die maritime Metropole mit einzigartiger Hafenkultur, lebendiger Musikszene und norddeutscher Gastfreundschaft. Von der Elbphilharmonie bis zur Reeperbahn.',
  keywords: ['Hamburg', 'Hansestadt', 'Hafen', 'Restaurants', 'Hotels', 'Musik', 'Theater', 'Alster', 'Elbe', 'Elbphilharmonie']
};

const HamburgPage = () => (
  <>

    <Hero
      title="Hamburg - Tor zur Welt"
      subtitle="Die Hansestadt"
      description="Erkunde die maritime Metropole mit ihrer einzigartigen Hafenkultur, lebendigen Musikszene und norddeutscher Gastfreundschaft. Von der Elbphilharmonie bis zur Reeperbahn - Hamburg fasziniert."
      backgroundImage="https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      align="left"
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            Hamburg erleben
          </Button>
          <Button variant="secondary" size="lg">
            Services ansehen
          </Button>
        </>
      }
    />

    <FeatureSection
      title="Was Hamburg zu bieten hat"
      subtitle="Kategorien"
      features={[
        {
          icon: UtensilsIcon,
          title: 'Restaurants',
          description: 'Von Fischbrötchen bis Sterneküche - maritime und internationale Gastronomie.',
        },
        {
          icon: HotelIcon,
          title: 'Hotels',
          description: 'Von der Hafencity bis zur Alster - Unterkünfte mit hanseatischem Charme.',
        },
        {
          icon: MusicIcon,
          title: 'Musik & Clubs',
          description: 'Von der Elbphilharmonie bis zu Clubs auf St. Pauli - Musik in allen Facetten.',
        },
        {
          icon: ShipIcon,
          title: 'Hafen',
          description: 'Einer der größten Häfen Europas mit Hafenrundfahrten und Speicherstadt.',
        },
        {
          icon: TheaterIcon,
          title: 'Theater',
          description: 'Musicals, Schauspiel und Comedy in der Theaterhochburg Deutschlands.',
        },
        {
          icon: WaterIcon,
          title: 'Alster & Elbe',
          description: 'Wassersport, Spaziergänge und Bootstouren auf Alster und Elbe.',
        },
      ]}
    />

    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)', backgroundColor: 'var(--color-surface-secondary)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-700)', margin: '0 0 var(--spacing-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Top-Empfehlungen
          </p>
          <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', margin: 0 }}>
            Beliebte Orte in Hamburg
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
          <ContentCard
            title="Fischereihafen Restaurant"
            description="Frischer Fisch direkt aus dem Hafen in maritimer Atmosphäre."
            imageUrl="https://images.pexels.com/photos/5531097/pexels-photo-5531097.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Reservieren</Button>}
          />
          <ContentCard
            title="Elbphilharmonie"
            description="Architektonisches Meisterwerk und Konzerthalle von Weltrang."
            imageUrl="https://images.pexels.com/photos/21721929/pexels-photo-21721929.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Tickets</Button>}
          />
          <ContentCard
            title="The Fontenay"
            description="Luxushotel an der Alster mit Panoramablick über Hamburg."
            imageUrl="https://images.pexels.com/photos/12606673/pexels-photo-12606673.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Buchen</Button>}
          />
        </div>
      </div>
    </section>

    <FeatureSection
      title="Hamburgs Stadtteile entdecken"
      subtitle="Viertel"
      columns={4}
      features={[
        {
          title: 'HafenCity',
          description: 'Modernes Hafenviertel mit Elbphilharmonie und Speicherstadt.',
        },
        {
          title: 'St. Pauli',
          description: 'Reeperbahn, Clubs und das Herz des Hamburger Nachtlebens.',
        },
        {
          title: 'Schanzenviertel',
          description: 'Alternatives Flair, Boutiquen und gemütliche Cafés.',
        },
        {
          title: 'Blankenese',
          description: 'Villen, Treppenviertel und Elbblick im noblen Westen.',
        },
      ]}
    />
  </>
);

export default HamburgPage;
