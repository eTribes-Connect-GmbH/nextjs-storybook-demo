import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './index';
import Button from '../../atoms/Button';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    links: [
      { href: '/berlin', label: 'Berlin' },
      { href: '/hamburg', label: 'Hamburg' },
      { href: '/munich', label: 'München' },
      { href: '/cologne', label: 'Köln' },
      { href: '/services', label: 'Services' },
    ],
  },
};

export const WithCTA: Story = {
  args: {
    links: [
      { href: '/berlin', label: 'Berlin' },
      { href: '/hamburg', label: 'Hamburg' },
      { href: '/munich', label: 'München' },
      { href: '/cologne', label: 'Köln' },
      { href: '/services', label: 'Services' },
    ],
    ctaButton: <Button variant="primary" size="sm">Jetzt buchen</Button>,
  },
};

export const WithCustomLogo: Story = {
  args: {
    logo: <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#005e6e' }}>🇩🇪 Deutschland</div>,
    links: [
      { href: '/berlin', label: 'Berlin' },
      { href: '/hamburg', label: 'Hamburg' },
      { href: '/munich', label: 'München' },
      { href: '/cologne', label: 'Köln' },
      { href: '/services', label: 'Services' },
    ],
  },
};
