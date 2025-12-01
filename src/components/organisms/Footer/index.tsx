import Link from 'next/link';
import './style.css';

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterProps = {
  sections: FooterSection[];
  copyright?: string;
  socialLinks?: FooterLink[];
};

const Footer = ({ sections, copyright, socialLinks }: FooterProps) => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__sections">
        {sections.map((section) => (
          <div key={section.title} className="footer__section">
            <h3 className="footer__section-title">{section.title}</h3>
            <ul className="footer__links">
              {section.links.map((link) => (
                <li key={link.href} className="footer__link-item">
                  <Link href={link.href} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        {copyright && <p className="footer__copyright">{copyright}</p>}
        {socialLinks && socialLinks.length > 0 && (
          <div className="footer__social">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer__social-link">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
