import type { Meta, StoryObj } from '@storybook/react';
import Footer from './index';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'Städte',
        links: [
          { href: '/berlin', label: 'Berlin' },
          { href: '/hamburg', label: 'Hamburg' },
          { href: '/munich', label: 'München' },
          { href: '/cologne', label: 'Köln' },
        ],
      },
      {
        title: 'Services',
        links: [
          { href: '/restaurants', label: 'Restaurants' },
          { href: '/hotels', label: 'Hotels' },
          { href: '/doctors', label: 'Ärzte' },
          { href: '/appointments', label: 'Termine' },
        ],
      },
      {
        title: 'Über uns',
        links: [
          { href: '/about', label: 'Über DeutschlandApp' },
          { href: '/contact', label: 'Kontakt' },
          { href: '/jobs', label: 'Karriere' },
        ],
      },
      {
        title: 'Rechtliches',
        links: [
          { href: '/privacy', label: 'Datenschutz' },
          { href: '/terms', label: 'AGB' },
          { href: '/imprint', label: 'Impressum' },
        ],
      },
    ],
    copyright: '© 2025 DeutschlandApp. Alle Rechte vorbehalten.',
  },
};

export const WithSocial: Story = {
  args: {
    sections: [
      {
        title: 'Städte',
        links: [
          { href: '/berlin', label: 'Berlin' },
          { href: '/hamburg', label: 'Hamburg' },
          { href: '/munich', label: 'München' },
        ],
      },
      {
        title: 'Services',
        links: [
          { href: '/restaurants', label: 'Restaurants' },
          { href: '/hotels', label: 'Hotels' },
          { href: '/services', label: 'Alle Services' },
        ],
      },
      {
        title: 'Rechtliches',
        links: [
          { href: '/privacy', label: 'Datenschutz' },
          { href: '/terms', label: 'AGB' },
          { href: '/imprint', label: 'Impressum' },
        ],
      },
    ],
    copyright: '© 2025 DeutschlandApp. Alle Rechte vorbehalten.',
    socialLinks: [
      { href: 'https://facebook.com', label: 'Facebook' },
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://instagram.com', label: 'Instagram' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  },
};

export const Minimal: Story = {
  args: {
    sections: [
      {
        title: 'Navigation',
        links: [
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services' },
          { href: '/about', label: 'Über uns' },
        ],
      },
    ],
    copyright: '© 2025 DeutschlandApp',
  },
};
