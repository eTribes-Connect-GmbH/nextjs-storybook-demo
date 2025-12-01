import type { Meta, StoryObj } from '@storybook/react';
import ServiceCard from './index';
import UserDoctorIcon from '@fortawesome/fontawesome-free/svgs/solid/user-doctor.svg?react';
import ScissorsIcon from '@fortawesome/fontawesome-free/svgs/solid/scissors.svg?react';
import UtensilsIcon from '@fortawesome/fontawesome-free/svgs/solid/utensils.svg?react';
import CarIcon from '@fortawesome/fontawesome-free/svgs/solid/car.svg?react';

const meta: Meta<typeof ServiceCard> = {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Doctor: Story = {
  args: {
    icon: UserDoctorIcon,
    title: 'Dr. med. Sarah Schmidt',
    category: 'Allgemeinmedizin',
    rating: 4.8,
    reviewCount: 127,
    location: 'Berlin-Mitte',
    availability: 'Termine verfügbar',
    imageUrl: 'https://images.pexels.com/photos/7904454/pexels-photo-7904454.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    onBook: () => alert('Termin buchen'),
    onDetails: () => alert('Details anzeigen'),
  },
};

export const Hairdresser: Story = {
  args: {
    icon: ScissorsIcon,
    title: 'Cut & Style Salon',
    category: 'Friseur',
    rating: 4.9,
    reviewCount: 342,
    location: 'Hamburg-Altona',
    availability: 'Heute noch Termine',
    imageUrl: 'https://images.pexels.com/photos/7447152/pexels-photo-7447152.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    onBook: () => alert('Termin buchen'),
    onDetails: () => alert('Details anzeigen'),
  },
};

export const Restaurant: Story = {
  args: {
    icon: UtensilsIcon,
    title: 'Restaurant zur goldenen Zeit',
    category: 'Gehobene Küche',
    rating: 4.7,
    reviewCount: 856,
    location: 'München-Schwabing',
    availability: 'Reservierung empfohlen',
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    onBook: () => alert('Tisch reservieren'),
    onDetails: () => alert('Details anzeigen'),
  },
};

export const Mechanic: Story = {
  args: {
    icon: CarIcon,
    title: 'Auto Werkstatt Müller',
    category: 'KFZ-Werkstatt',
    rating: 4.6,
    reviewCount: 234,
    location: 'Köln-Ehrenfeld',
    availability: 'Nächster Termin: Morgen',
    imageUrl: 'https://images.pexels.com/photos/8986148/pexels-photo-8986148.jpeg?auto=compress&cs=tinysrgb&h=960&w=1440',
    onBook: () => alert('Termin buchen'),
    onDetails: () => alert('Details anzeigen'),
  },
};

export const WithoutImage: Story = {
  args: {
    icon: UserDoctorIcon,
    title: 'Praxis Dr. Weber',
    category: 'Zahnmedizin',
    rating: 4.5,
    reviewCount: 89,
    location: 'Frankfurt',
    availability: 'Termine verfügbar',
    onBook: () => alert('Termin buchen'),
    onDetails: () => alert('Details anzeigen'),
  },
};

export const MinimalInfo: Story = {
  args: {
    title: 'Yoga Studio Berlin',
    category: 'Wellness',
    location: 'Berlin-Kreuzberg',
    onBook: () => alert('Termin buchen'),
  },
};
