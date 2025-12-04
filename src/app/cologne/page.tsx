import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Section from '@/components/atoms/Section';
import Grid from '@/components/atoms/Grid';
import ContentCard from '@/components/molecules/ContentCard';
import SectionHeader from '@/components/molecules/SectionHeader';
import Hero from '@/components/organisms/Hero';
import FeatureSection from '@/components/organisms/FeatureSection';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import HotelIcon from '@fortawesome/fontawesome-free/svgs/solid/hotel.svg?react';
import BeerIcon from '@fortawesome/fontawesome-free/svgs/solid/beer-mug-empty.svg?react';
import ChurchIcon from '@fortawesome/fontawesome-free/svgs/solid/church.svg?react';
import PartyIcon from '@fortawesome/fontawesome-free/svgs/solid/masks-theater.svg?react';
import BridgeIcon from '@fortawesome/fontawesome-free/svgs/solid/bridge.svg?react';

export const metadata: Metadata = {
  title: 'Köln',
  description: 'Erlebe Köln - kölsche Lebensart, den Dom, eine der lebendigsten Karnevalskulturen der Welt und rheinische Gastfreundschaft. Köln ist Tradition, Moderne und pure Lebensfreude.',
  keywords: ['Köln', 'Kölner Dom', 'Karneval', 'Restaurants', 'Hotels', 'Brauhäuser', 'Rhein', 'Altstadt']
};

const ColognePage = () => (
  <>

    <Hero
      title="Köln - Stadt am Rhein"
      subtitle="Rheinland"
      description="Erlebe kölsche Lebensart, den Dom, eine der lebendigsten Karnevalskulturen der Welt und rheinische Gastfreundschaft. Köln ist Tradition, Moderne und pure Lebensfreude."
      backgroundImage="https://images.pexels.com/photos/161849/cologne-dom-night-architecture-161849.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      align="left"
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            Köln erleben
          </Button>
          <Link href="/services">
            <Button variant="secondary" size="lg">
              Services ansehen
            </Button>
          </Link>
        </>
      }
    />

    <FeatureSection
      title="Was Köln zu bieten hat"
      subtitle="Kategorien"
      features={[
        {
          icon: UtensilsIcon,
          title: 'Restaurants',
          description: 'Von Himmel un Ääd bis Sterneküche - rheinische und internationale Gastronomie.',
        },
        {
          icon: HotelIcon,
          title: 'Hotels',
          description: 'Von gemütlichen Pensionen bis zu Design-Hotels mit Domblick.',
        },
        {
          icon: BeerIcon,
          title: 'Brauhäuser',
          description: 'Traditionelle Brauhäuser mit frischem Kölsch und herzhaftem Essen.',
        },
        {
          icon: ChurchIcon,
          title: 'Kölner Dom',
          description: 'UNESCO-Welterbe und Wahrzeichen der Stadt - ein Muss für jeden Besucher.',
        },
        {
          icon: PartyIcon,
          title: 'Karneval',
          description: 'Die fünfte Jahreszeit - Kölle Alaaf und ausgelassene Straßenfeste.',
        },
        {
          icon: BridgeIcon,
          title: 'Rhein',
          description: 'Rheinuferpromenade, Schifffahrten und das maritime Herz der Stadt.',
        },
      ]}
    />

    <Section variant="secondary">
      <Container>
        <SectionHeader title="Beliebte Orte in Köln" subtitle="Top-Empfehlungen" />
        <Grid>
          <ContentCard
            title="Früh am Dom"
            description="Traditionelles Brauhaus mit frischem Kölsch direkt am Dom."
            imageUrl="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Reservieren</Button>}
          />
          <ContentCard
            title="Kölner Dom"
            description="Das gotische Meisterwerk und berühmteste Wahrzeichen Kölns."
            imageUrl="https://images.pexels.com/photos/15865545/pexels-photo-15865545.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Details</Button>}
          />
          <ContentCard
            title="Excelsior Hotel Ernst"
            description="Traditionshotel der Luxusklasse direkt am Dom."
            imageUrl="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Buchen</Button>}
          />
        </Grid>
      </Container>
    </Section>

    <FeatureSection
      title="Kölns Veedel entdecken"
      subtitle="Stadtteile"
      columns={4}
      features={[
        {
          title: 'Altstadt',
          description: 'Historisches Zentrum mit Dom, Brauhäusern und rheinischer Gemütlichkeit.',
        },
        {
          title: 'Belgisches Viertel',
          description: 'Hippes Szeneviertel mit Boutiquen, Cafés und Galerien.',
        },
        {
          title: 'Ehrenfeld',
          description: 'Multikulti und kreativ - das alternative Herz Kölns.',
        },
        {
          title: 'Südstadt',
          description: 'Lebendiges Viertel mit mediterranem Flair und Chlodwigplatz.',
        },
      ]}
    />
  </>
);

export default ColognePage;
