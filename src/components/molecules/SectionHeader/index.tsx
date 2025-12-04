import './style.css';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className='section-header'>
    {subtitle && <p className='section-header__subtitle'>{subtitle}</p>}
    <h2 className='section-header__title'>{title}</h2>
  </div>
);

export default SectionHeader;
