import type { Metadata } from 'next';
import Button from '@/components/atoms/Button';
import ContentCard from '@/components/molecules/ContentCard';
import Hero from '@/components/organisms/Hero';
import FeatureSection from '@/components/organisms/FeatureSection';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import HotelIcon from '@fortawesome/fontawesome-free/svgs/solid/hotel.svg?react';
import UserDoctorIcon from '@fortawesome/fontawesome-free/svgs/solid/user-doctor.svg?react';
import ScissorsIcon from '@fortawesome/fontawesome-free/svgs/solid/scissors.svg?react';
import CarIcon from '@fortawesome/fontawesome-free/svgs/solid/car.svg?react';
import WrenchIcon from '@fortawesome/fontawesome-free/svgs/solid/screwdriver-wrench.svg?react';
import GlassIcon from '@fortawesome/fontawesome-free/svgs/solid/martini-glass-citrus.svg?react';
import SpaIcon from '@fortawesome/fontawesome-free/svgs/solid/spa.svg?react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Buche Tische in Restaurants, Hotels, Termine bei Ärzten, Friseuren, Mechanikern und vielen weiteren Dienstleistern - schnell, einfach und bequem.',
  keywords: ['Services', 'Termine', 'Restaurants', 'Hotels', 'Ärzte', 'Friseure', 'Mechaniker', 'Handwerker', 'Buchung']
};

const ServicesPage = () => (
  <>

    <Hero
      title="Alle Services an einem Ort"
      subtitle="Services"
      description="Buche Tische in Restaurants, Hotels, Termine bei Ärzten, Friseuren, Mechanikern und vielen weiteren Dienstleistern - schnell, einfach und bequem."
      backgroundImage="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            Service finden
          </Button>
          <Button variant="secondary" size="lg">
            Städte durchsuchen
          </Button>
        </>
      }
    />

    <FeatureSection
      title="Gastronomie & Unterkünfte"
      subtitle="Essen & Übernachten"
      features={[
        {
          icon: UtensilsIcon,
          title: 'Restaurants',
          description: 'Reserviere Tische in Top-Restaurants - von Sterneküche bis zum gemütlichen Lokal um die Ecke.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
        },
        {
          icon: HotelIcon,
          title: 'Hotels',
          description: 'Buche Unterkünfte in allen Preisklassen - vom Boutique-Hotel bis zur Luxus-Suite.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
        },
        {
          icon: GlassIcon,
          title: 'Bars & Clubs',
          description: 'Reserviere VIP-Bereiche oder informiere dich über die angesagtesten Locations.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Entdecken</Button>,
        },
      ]}
    />

    <FeatureSection
      title="Gesundheit & Wellness"
      subtitle="Körper & Geist"
      features={[
        {
          icon: UserDoctorIcon,
          title: 'Ärzte',
          description: 'Schnelle Terminvereinbarung bei Fachärzten und Allgemeinmedizinern in deiner Nähe.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Termin buchen</Button>,
        },
        {
          icon: ScissorsIcon,
          title: 'Friseure',
          description: 'Buche Termine bei Friseuren, Barbershops und Stylisten für den perfekten Look.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Termin buchen</Button>,
        },
        {
          icon: SpaIcon,
          title: 'Wellness',
          description: 'Entspannung pur - buche Massagen, Spa-Behandlungen und Beauty-Anwendungen.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Termin buchen</Button>,
        },
      ]}
    />

    <FeatureSection
      title="Handwerk & Reparaturen"
      subtitle="Profis für alle Fälle"
      columns={2}
      features={[
        {
          icon: CarIcon,
          title: 'Mechaniker',
          description: 'Werkstatttermine für Inspektionen, Reparaturen und TÜV in deiner Region.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Termin buchen</Button>,
        },
        {
          icon: WrenchIcon,
          title: 'Handwerker',
          description: 'Finde und buche Elektriker, Klempner, Maler und andere Handwerker.',
          action: <Button variant="outline" size="sm" icon={ChevronRightIcon} iconPosition="right">Termin buchen</Button>,
        },
      ]}
    />

    <section style={{ padding: 'var(--spacing-20) var(--spacing-6)', backgroundColor: 'var(--color-surface-secondary)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-700)', margin: '0 0 var(--spacing-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Beliebte Services
          </p>
          <h2 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', margin: 0 }}>
            Aktuell am häufigsten gebucht
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)' }}>
          <ContentCard
            title="Dr. med. Sarah Schmidt"
            description="Allgemeinmedizin - Schnelle Termine, moderne Praxis in Berlin-Mitte."
            imageUrl="https://images.pexels.com/photos/7904454/pexels-photo-7904454.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="primary" size="sm">Termin buchen</Button>}
          />
          <ContentCard
            title="Cut & Style Salon"
            description="Top-Friseur in Hamburg - Experten für moderne Schnitte und Colorationen."
            imageUrl="https://images.pexels.com/photos/7447152/pexels-photo-7447152.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="primary" size="sm">Termin buchen</Button>}
          />
          <ContentCard
            title="Auto Werkstatt Müller"
            description="Zuverlässige KFZ-Werkstatt in München - faire Preise, schneller Service."
            imageUrl="https://images.pexels.com/photos/8986148/pexels-photo-8986148.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="primary" size="sm">Termin buchen</Button>}
          />
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
