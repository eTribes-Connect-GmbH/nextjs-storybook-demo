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
import MuseumIcon from '@fortawesome/fontawesome-free/svgs/solid/landmark.svg?react';
import MountainIcon from '@fortawesome/fontawesome-free/svgs/solid/mountain.svg?react';
import ShoppingIcon from '@fortawesome/fontawesome-free/svgs/solid/bag-shopping.svg?react';

export const metadata: Metadata = {
  title: 'München',
  description: 'Genieße München - Weltstadt mit Herz. Bayerische Gastfreundschaft, traditionelle Biergärten, Weltklasse-Museen und alpine Nähe. München vereint Tradition und Moderne.',
  keywords: ['München', 'Bayern', 'Biergärten', 'Restaurants', 'Hotels', 'Museen', 'Oktoberfest', 'Alpen', 'Shopping']
};

const MunichPage = () => (
  <>

    <Hero
      title="München - Weltstadt mit Herz"
      subtitle="Bayern"
      description="Genieße bayerische Gastfreundschaft, traditionelle Biergärten, Weltklasse-Museen und alpine Nähe. München vereint Tradition und Moderne wie keine andere deutsche Stadt."
      backgroundImage="https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840"
      overlay={true}
      align="left"
      actions={
        <>
          <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
            München entdecken
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
      title="Was München zu bieten hat"
      subtitle="Kategorien"
      features={[
        {
          icon: UtensilsIcon,
          title: 'Restaurants',
          description: 'Von Schmankerl bis Sterneküche - bayerische und internationale Gastronomie.',
        },
        {
          icon: HotelIcon,
          title: 'Hotels',
          description: 'Von traditionellen Gasthöfen bis zu modernen Luxushotels.',
        },
        {
          icon: BeerIcon,
          title: 'Biergärten',
          description: 'Gemütliche Biergärten unter Kastanienbäumen mit bayerischem Flair.',
        },
        {
          icon: MuseumIcon,
          title: 'Museen',
          description: 'Weltklasse-Museen von Kunst bis Technik, vom Deutschen Museum bis zur Pinakothek.',
        },
        {
          icon: ShoppingIcon,
          title: 'Shopping',
          description: 'Von der exklusiven Maximilianstraße bis zum Viktualienmarkt.',
        },
        {
          icon: MountainIcon,
          title: 'Alpen',
          description: 'Die Berge sind nah - Wandern und Skifahren in unter einer Stunde.',
        },
      ]}
    />

    <Section variant="secondary">
      <Container>
        <SectionHeader title="Beliebte Orte in München" subtitle="Top-Empfehlungen" />
        <Grid>
          <ContentCard
            title="Hofbräuhaus"
            description="Weltberühmtes Wirtshaus mit traditioneller bayerischer Küche und Gemütlichkeit."
            imageUrl="https://images.pexels.com/photos/14885437/pexels-photo-14885437.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Reservieren</Button>}
          />
          <ContentCard
            title="Englischer Garten"
            description="Einer der größten Stadtparks der Welt mit Biergärten und Eisbachwelle."
            imageUrl="https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Details</Button>}
          />
          <ContentCard
            title="Hotel Bayerischer Hof"
            description="Traditionsreiches Luxushotel im Herzen Münchens."
            imageUrl="https://images.pexels.com/photos/14613702/pexels-photo-14613702.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
            actions={<Button variant="outline" size="sm">Buchen</Button>}
          />
        </Grid>
      </Container>
    </Section>

    <FeatureSection
      title="Münchens Viertel entdecken"
      subtitle="Stadtteile"
      columns={4}
      features={[
        {
          title: 'Altstadt',
          description: 'Historisches Zentrum mit Marienplatz, Frauenkirche und Viktualienmarkt.',
        },
        {
          title: 'Schwabing',
          description: 'Künstlerviertel mit Leopoldstraße und studentischem Flair.',
        },
        {
          title: 'Glockenbachviertel',
          description: 'Buntes Szeneviertel mit Cafés, Bars und kreativer Atmosphäre.',
        },
        {
          title: 'Haidhausen',
          description: 'Charmantes Altbauviertel, auch "Franzosenviertel" genannt.',
        },
      ]}
    />
  </>
);

export default MunichPage;
