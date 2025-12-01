import type { Meta, StoryObj } from '@storybook/react';
import CityCard from './index';

const meta: Meta<typeof CityCard> = {
  title: 'Molecules/CityCard',
  component: CityCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CityCard>;

export const Berlin: Story = {
  args: {
    name: 'Berlin',
    region: 'Hauptstadt',
    description: 'Die pulsierende Hauptstadt mit ihrer einzigartigen Kultur, Geschichte und dem legendären Nachtleben.',
    imageUrl: 'https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/berlin',
    highlights: ['Kultur', 'Geschichte', 'Nachtleben', 'Street Art'],
  },
};

export const Hamburg: Story = {
  args: {
    name: 'Hamburg',
    region: 'Hansestadt',
    description: 'Die maritime Metropole mit einzigartiger Hafenkultur und lebendiger Musikszene.',
    imageUrl: 'https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/hamburg',
    highlights: ['Hafen', 'Musik', 'Alster', 'Theater'],
    badge: 'Beliebt',
  },
};

export const Munich: Story = {
  args: {
    name: 'München',
    region: 'Bayern',
    description: 'Bayerische Gastfreundschaft trifft auf moderne Großstadtkultur und alpine Nähe.',
    imageUrl: 'https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/munich',
    highlights: ['Biergärten', 'Museen', 'Oktoberfest', 'Alpen'],
  },
};

export const Cologne: Story = {
  args: {
    name: 'Köln',
    region: 'Rheinland',
    description: 'Kölsche Lebensart, der Dom und eine der lebendigsten Karnevalskulturen der Welt.',
    imageUrl: 'https://images.pexels.com/photos/161849/cologne-dom-night-architecture-161849.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/cologne',
    highlights: ['Dom', 'Karneval', 'Kölsch', 'Rhein'],
    badge: 'Neu',
  },
};

export const WithoutHighlights: Story = {
  args: {
    name: 'Berlin',
    region: 'Hauptstadt',
    description: 'Die pulsierende Hauptstadt mit ihrer einzigartigen Kultur, Geschichte und dem legendären Nachtleben.',
    imageUrl: 'https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/berlin',
  },
};

export const CustomCTA: Story = {
  args: {
    name: 'Hamburg',
    region: 'Hansestadt',
    description: 'Die maritime Metropole mit einzigartiger Hafenkultur und lebendiger Musikszene.',
    imageUrl: 'https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    href: '/hamburg',
    highlights: ['Hafen', 'Musik', 'Alster'],
    ctaLabel: 'Jetzt erkunden',
    badge: 'Geheimtipp',
  },
};

export const InGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)', maxWidth: '1200px' }}>
      <CityCard
        name="Berlin"
        region="Hauptstadt"
        description="Die pulsierende Hauptstadt mit einzigartiger Kultur."
        imageUrl="https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
        href="/berlin"
        highlights={['Kultur', 'Geschichte']}
      />
      <CityCard
        name="Hamburg"
        region="Hansestadt"
        description="Maritime Metropole mit Hafenkultur."
        imageUrl="https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
        href="/hamburg"
        highlights={['Hafen', 'Musik']}
        badge="Beliebt"
      />
      <CityCard
        name="München"
        region="Bayern"
        description="Bayerische Lebensart und Weltstadt."
        imageUrl="https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440"
        href="/munich"
        highlights={['Biergärten', 'Alpen']}
      />
    </div>
  ),
};
