import type { Meta, StoryObj } from '@storybook/react';
import Hero from './index';
import Button from '../../atoms/Button';
import ChevronRightIcon from '@fortawesome/fontawesome-free/svgs/solid/chevron-right.svg?react';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Entdecke Deutschland',
    subtitle: 'Willkommen',
    description: 'Finde die besten Restaurants, Hotels, Bars und vieles mehr in deiner Stadt.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Entdecke Berlin',
    subtitle: 'Die Hauptstadt',
    description: 'Erlebe die pulsierende Hauptstadt mit ihren einzigartigen Restaurants, Clubs und Sehenswürdigkeiten.',
    actions: (
      <>
        <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
          Jetzt entdecken
        </Button>
        <Button variant="outline" size="lg">
          Mehr erfahren
        </Button>
      </>
    ),
  },
};

export const WithBackground: Story = {
  args: {
    title: 'München - Stadt der Kultur',
    subtitle: 'Bayern',
    description: 'Genieße bayerische Gastfreundschaft, traditionelle Biergärten und Weltklasse-Museen.',
    backgroundImage: 'https://images.pexels.com/photos/4213372/pexels-photo-4213372.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840',
    overlay: true,
    actions: (
      <>
        <Button variant="primary" size="lg">
          Entdecken
        </Button>
        <Button variant="secondary" size="lg">
          Services buchen
        </Button>
      </>
    ),
  },
};

export const LeftAlign: Story = {
  args: {
    title: 'Hamburg - Tor zur Welt',
    subtitle: 'Hansestadt',
    description: 'Erkunde die maritime Metropole mit ihrer einzigartigen Hafenkultur und lebendigen Musikszene.',
    align: 'left',
    actions: (
      <>
        <Button variant="primary" size="lg" icon={ChevronRightIcon} iconPosition="right">
          Mehr entdecken
        </Button>
      </>
    ),
  },
};

export const WithBackgroundLeftAlign: Story = {
  args: {
    title: 'Köln - Stadt am Rhein',
    subtitle: 'Rheinland',
    description: 'Erlebe kölsche Lebensart, den Dom und eine der lebendigsten Karnevalskulturen der Welt.',
    backgroundImage: 'https://images.pexels.com/photos/161849/cologne-dom-night-architecture-161849.jpeg?auto=compress&cs=tinysrgb&h=2160&w=3840',
    overlay: true,
    align: 'left',
    actions: (
      <>
        <Button variant="primary" size="lg">
          Stadt erkunden
        </Button>
      </>
    ),
  },
};
