import Link from 'next/link';
import type { ReactNode } from 'react';
import MapMarkerIcon from '@fortawesome/fontawesome-free/svgs/solid/location-dot.svg?react';
import './style.css';

export type NavigationLink = {
  href: string;
  label: string;
};

export type NavigationProps = {
  logo?: ReactNode;
  links: NavigationLink[];
  ctaButton?: ReactNode;
};

const Navigation = ({ logo, links, ctaButton }: NavigationProps) => (
  <nav className="navigation">
    <div className="navigation__container">
      <Link href="/" className="navigation__logo-link">
        <div className="navigation__logo">
          {logo || (
            <>
              <MapMarkerIcon className="navigation__logo-icon" />
              <span className="navigation__logo-text">DeutschlandApp</span>
            </>
          )}
        </div>
      </Link>

      <ul className="navigation__links">
        {links.map((link) => (
          <li key={link.href} className="navigation__link-item">
            <Link href={link.href} className="navigation__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {ctaButton && (
        <div className="navigation__cta">
          {ctaButton}
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
