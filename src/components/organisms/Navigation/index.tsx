'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';
import MapMarkerIcon from '@fortawesome/fontawesome-free/svgs/solid/location-dot.svg?react';
import BarsIcon from '@fortawesome/fontawesome-free/svgs/solid/bars.svg?react';
import XMarkIcon from '@fortawesome/fontawesome-free/svgs/solid/xmark.svg?react';
import './style.css';

export type NavigationLink = {
  href: string;
  label: string;
};

export type NavigationProps = {
  links: NavigationLink[];
  ctaButton?: ReactNode;
};

const Navigation = ({ links, ctaButton }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link href="/" className="navigation__logo-link">
          <div className="navigation__logo">
            <MapMarkerIcon className="navigation__logo-icon" />
            <span className="navigation__logo-text">DeutschlandApp</span>
          </div>
        </Link>

        <ul className="navigation__links">
          {links.map(link => (
            <li key={link.href} className="navigation__link-item">
              <Link href={link.href} className="navigation__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {ctaButton && <div className="navigation__cta">{ctaButton}</div>}

        <button
          className="navigation__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="navigation__mobile-icon" />
          ) : (
            <BarsIcon className="navigation__mobile-icon" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="navigation__mobile-menu">
          <ul className="navigation__mobile-links">
            {links.map(link => (
              <li key={link.href} className="navigation__mobile-link-item">
                <Link href={link.href} className="navigation__mobile-link" onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {ctaButton && (
            <div className="navigation__mobile-cta" onClick={closeMobileMenu}>
              {ctaButton}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
