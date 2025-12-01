import '@fontsource-variable/baloo-2';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Button from '@/components/atoms/Button';
import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';
import '../styles/globals.css';
import '../styles/tokens.css';

export const metadata: Metadata = {
  title: {
    template: '%s | DeutschlandApp',
    default: 'DeutschlandApp'
  },
  description: 'Finde die besten Restaurants, Hotels, Bars und buche Termine bei Ärzten, Friseuren und mehr in Deutschland.',
  keywords: ['Deutschland', 'Restaurants', 'Hotels', 'Termine', 'Buchung', 'Berlin', 'Hamburg', 'München', 'Köln']
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="de">
    <body>
      <Navigation
        links={[
          { href: '/', label: 'Home' },
          { href: '/berlin', label: 'Berlin' },
          { href: '/hamburg', label: 'Hamburg' },
          { href: '/munich', label: 'München' },
          { href: '/cologne', label: 'Köln' },
          { href: '/services', label: 'Services' },
        ]}
        ctaButton={<Button variant="primary" size="sm">App herunterladen</Button>}
      />
      {children}
      <Footer
        sections={[
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
        ]}
        copyright="© 2025 DeutschlandApp. Alle Rechte vorbehalten."
        socialLinks={[
          { href: 'https://facebook.com', label: 'Facebook' },
          { href: 'https://twitter.com', label: 'Twitter' },
          { href: 'https://instagram.com', label: 'Instagram' },
        ]}
      />
    </body>
  </html>
);

export default RootLayout;
