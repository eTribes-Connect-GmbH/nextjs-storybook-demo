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
import GlassIcon from '@fortawesome/fontawesome-free/svgs/solid/martini-glass-citrus.svg?react';
import BuildingIcon from '@fortawesome/fontawesome-free/svgs/solid/building.svg?react';
import MuseumIcon from '@fortawesome/fontawesome-free/svgs/solid/landmark.svg?react';
import TreeIcon from '@fortawesome/fontawesome-free/svgs/solid/tree.svg?react';

export const metadata: Metadata = {
  title: 'Berlin',
  description:
    'Entdecke Berlin - die pulsierende Hauptstadt mit einzigartigen Restaurants, Clubs, Museen und Sehenswürdigkeiten. Von historischen Monumenten bis zu moderner Street Art.',
  keywords: ['Berlin', 'Hauptstadt', 'Restaurants', 'Hotels', 'Bars', 'Clubs', 'Museen', 'Sehenswürdigkeiten', 'Kultur']
};

const BerlinPage = () => (
  <>
    <Hero
      title="Entdecke Berlin"
      subtitle="Die Hauptstadt"
      description="Erlebe die pulsierende Hauptstadt mit ihren einzigartigen Restaurants, Clubs, Museen und Sehenswürdigkeiten. Von historischen Monumenten bis zu moderner Street Art - Berlin hat für jeden etwas zu bieten."
      backgroundImage="https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      align="left"
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            Jetzt entdecken
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
      title="Was Berlin zu bieten hat"
      subtitle="Kategorien"
      features={[
        {
          icon: UtensilsIcon,
          title: 'Restaurants',
          description: 'Von Currywurst bis Sterneküche - Berlins vielfältige Gastronomie begeistert.'
        },
        {
          icon: HotelIcon,
          title: 'Hotels',
          description: 'Vom Boutique-Hotel bis zur Design-Unterkunft in allen Kiezen.'
        },
        {
          icon: GlassIcon,
          title: 'Bars & Clubs',
          description: 'Das legendäre Berliner Nachtleben - von Underground bis Rooftop-Bar.'
        },
        {
          icon: MuseumIcon,
          title: 'Kultur',
          description: 'Weltklasse-Museen, Theater und Galerien an jeder Ecke.'
        },
        {
          icon: BuildingIcon,
          title: 'Sehenswürdigkeiten',
          description: 'Brandenburger Tor, Reichstag, East Side Gallery und mehr.'
        },
        {
          icon: TreeIcon,
          title: 'Parks',
          description: 'Grüne Oasen wie Tiergarten, Tempelhofer Feld und Mauerpark.'
        }
      ]}
    />
    <Section variant="secondary">
      <Container>
        <SectionHeader title="Beliebte Orte in Berlin" subtitle="Top-Empfehlungen" />
        <Grid>
          <ContentCard
            title="Restaurant zur goldenen Zeit"
            description="Moderne deutsche Küche mit regionalen Zutaten in gemütlicher Atmosphäre."
            imageUrl="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={
              <Button variant="outline" size="sm">
                Reservieren
              </Button>
            }
          />
          <ContentCard
            title="Berghain"
            description="Weltberühmter Techno-Club in ehemaliger Industriehalle."
            imageUrl="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={
              <Button variant="outline" size="sm">
                Details
              </Button>
            }
          />
          <ContentCard
            title="Hotel Adlon Kempinski"
            description="Luxushotel am Brandenburger Tor mit legendärer Geschichte."
            imageUrl="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={
              <Button variant="outline" size="sm">
                Buchen
              </Button>
            }
          />
        </Grid>
      </Container>
    </Section>
    <FeatureSection
      title="Berlins Kieze entdecken"
      subtitle="Stadtteile"
      columns={4}
      features={[
        {
          title: 'Mitte',
          description: 'Das historische Zentrum mit den wichtigsten Sehenswürdigkeiten.'
        },
        {
          title: 'Kreuzberg',
          description: 'Multikulti, Street Art und alternatives Lebensgefühl.'
        },
        {
          title: 'Prenzlauer Berg',
          description: 'Charmante Altbauten, Cafés und Familienfreundlichkeit.'
        },
        {
          title: 'Friedrichshain',
          description: 'Jung, lebendig und perfekt für Nachtschwärmer.'
        }
      ]}
    />
  </>
);

export default BerlinPage;
