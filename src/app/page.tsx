import type { Metadata } from 'next';
import Button from '@/components/atoms/Button';
import ContentCard from '@/components/molecules/ContentCard';
import Hero from '@/components/organisms/Hero';
import FeatureSection from '@/components/organisms/FeatureSection';
import MapIcon from '@fortawesome/fontawesome-free/svgs/solid/map-location-dot.svg?react';
import CalendarIcon from '@fortawesome/fontawesome-free/svgs/solid/calendar-check.svg?react';
import StarIcon from '@fortawesome/fontawesome-free/svgs/solid/star.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import HotelIcon from '@fortawesome/fontawesome-free/svgs/solid/hotel.svg?react';
import UserIcon from '@fortawesome/fontawesome-free/svgs/solid/user-doctor.svg?react';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';

export const metadata: Metadata = {
  title: 'Entdecke Deutschland',
  description: 'Finde die besten Restaurants, Hotels, Bars und buche Termine bei Ärzten, Friseuren und mehr in Berlin, Hamburg, München und Köln.',
  keywords: ['Deutschland', 'Städte', 'Restaurants', 'Hotels', 'Bars', 'Termine', 'Services']
};

const LandingPage = () => (
  <>

    <Hero
      title="Entdecke Deutschland"
      subtitle="Willkommen bei DeutschlandApp"
      description="Finde die besten Restaurants, Hotels, Bars und buche Termine bei Ärzten, Friseuren und mehr - alles an einem Ort."
      backgroundImage="https://images.pexels.com/photos/12568079/pexels-photo-12568079.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            Städte entdecken
          </Button>
          <Button variant="secondary" size="lg">
            Services ansehen
          </Button>
        </>
      }
    />

    <FeatureSection
      title="Was wir bieten"
      subtitle="Features"
      features={[
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
      ]}
    />

    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)', backgroundColor: 'var(--color-surface-secondary)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-700)', margin: '0 0 var(--spacing-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Städte
          </p>
          <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', margin: 0 }}>
            Entdecke beliebte Städte
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
          <ContentCard
            title="Berlin"
            subtitle="Hauptstadt"
            description="Die pulsierende Hauptstadt mit ihrer einzigartigen Kultur, Geschichte und dem legendären Nachtleben."
            imageUrl="https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            href="/berlin"
            highlights={['Kultur', 'Geschichte', 'Nachtleben']}
            actions={<Button variant="outline" size="sm" fullWidth icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>}
          />
          <ContentCard
            title="Hamburg"
            subtitle="Hansestadt"
            description="Die maritime Metropole mit einzigartiger Hafenkultur und lebendiger Musikszene."
            imageUrl="https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            href="/hamburg"
            highlights={['Hafen', 'Musik', 'Alster']}
            actions={<Button variant="outline" size="sm" fullWidth icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>}
          />
          <ContentCard
            title="München"
            subtitle="Bayern"
            description="Bayerische Gastfreundschaft trifft auf moderne Großstadtkultur und alpine Nähe."
            imageUrl="https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            href="/munich"
            highlights={['Biergärten', 'Museen', 'Alpen']}
            actions={<Button variant="outline" size="sm" fullWidth icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>}
          />
          <ContentCard
            title="Köln"
            subtitle="Rheinland"
            description="Kölsche Lebensart, der Dom und eine der lebendigsten Karnevalskulturen der Welt."
            imageUrl="https://images.pexels.com/photos/161849/cologne-dom-night-architecture-161849.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            href="/cologne"
            highlights={['Dom', 'Karneval', 'Rhein']}
            actions={<Button variant="outline" size="sm" fullWidth icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>}
          />
        </div>
      </div>
    </section>

    <FeatureSection
      title="Unsere Services"
      subtitle="Alles an einem Ort"
      columns={4}
      features={[
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
      ]}
    />
  </>
);

export default LandingPage;