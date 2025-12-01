import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../atoms/Button';
import ContentCard from './index';

const meta: Meta<typeof ContentCard> = {
  title: 'Molecules/ContentCard',
  component: ContentCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ContentCard>;

export const City: Story = {
  args: {
    title: 'Berlin',
    subtitle: 'Hauptstadt',
    description: 'Die pulsierende Hauptstadt mit ihrer einzigartigen Kultur, Geschichte und dem legendären Nachtleben.',
    imageUrl: 'https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    href: '/berlin',
    highlights: ['Kultur', 'Geschichte', 'Nachtleben', 'Street Art'],
    actions: <Button variant="outline" size="sm" fullWidth>Entdecken</Button>,
  },
};

export const Restaurant: Story = {
  args: {
    title: 'Restaurant zur goldenen Zeit',
    description: 'Moderne deutsche Küche mit regionalen Zutaten in gemütlicher Atmosphäre.',
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    actions: <Button variant="outline" size="sm">Reservieren</Button>,
  },
};

export const Service: Story = {
  args: {
    title: 'Dr. med. Sarah Schmidt',
    description: 'Allgemeinmedizin - Schnelle Termine, moderne Praxis in Berlin-Mitte.',
    imageUrl: 'https://images.pexels.com/photos/7904454/pexels-photo-7904454.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    actions: <Button variant="primary" size="sm">Termin buchen</Button>,
  },
};

export const WithBadge: Story = {
  args: {
    title: 'Hamburg',
    subtitle: 'Hansestadt',
    description: 'Die maritime Metropole mit einzigartiger Hafenkultur und lebendiger Musikszene.',
    imageUrl: 'https://images.pexels.com/photos/28298008/pexels-photo-28298008.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    href: '/hamburg',
    highlights: ['Hafen', 'Musik', 'Alster', 'Theater'],
    badge: 'Beliebt',
    actions: <Button variant="outline" size="sm" fullWidth>Entdecken</Button>,
  },
};

export const WithoutHighlights: Story = {
  args: {
    title: 'Hotel Adlon Kempinski',
    description: 'Luxushotel am Brandenburger Tor mit legendärer Geschichte.',
    imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    actions: <Button variant="outline" size="sm">Buchen</Button>,
  },
};

export const WithLink: Story = {
  args: {
    title: 'München',
    subtitle: 'Bayern',
    description: 'Bayerische Gastfreundschaft trifft auf moderne Großstadtkultur und alpine Nähe.',
    imageUrl: 'https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    href: '/munich',
    highlights: ['Biergärten', 'Museen', 'Oktoberfest', 'Alpen'],
    actions: <Button variant="outline" size="sm" fullWidth>Entdecken</Button>,
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'Berghain',
    description: 'Weltberühmter Techno-Club in ehemaliger Industriehalle.',
    imageUrl: 'https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&h=480&w=720',
    actions: <Button variant="outline" size="sm">Details</Button>,
  },
};

export const InGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)', maxWidth: '1200px' }}>
      <ContentCard
        title="Berlin"
        subtitle="Hauptstadt"
        description="Die pulsierende Hauptstadt mit einzigartiger Kultur."
        imageUrl="https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&h=480&w=720"
        href="/berlin"
        highlights={['Kultur', 'Geschichte']}
        actions={<Button variant="outline" size="sm" fullWidth>Entdecken</Button>}
      />
      <ContentCard
        title="Restaurant zur goldenen Zeit"
        description="Moderne deutsche Küche mit regionalen Zutaten in gemütlicher Atmosphäre."
        imageUrl="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=480&w=720"
        actions={<Button variant="outline" size="sm">Reservieren</Button>}
      />
      <ContentCard
        title="Dr. med. Sarah Schmidt"
        description="Allgemeinmedizin - Schnelle Termine, moderne Praxis in Berlin-Mitte."
        imageUrl="https://images.pexels.com/photos/7904454/pexels-photo-7904454.jpeg?auto=compress&cs=tinysrgb&h=480&w=720"
        actions={<Button variant="primary" size="sm">Termin buchen</Button>}
        badge="Verfügbar"
      />
    </div>
  ),
};
