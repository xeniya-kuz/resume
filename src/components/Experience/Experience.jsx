import { useSelector } from 'react-redux';
import { getActiveSection, getCurrentLanguage } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import './Experience.css';

export function Experience() {
  const currentLanguage = useSelector(getCurrentLanguage);
  const activeSection = useSelector(getActiveSection);

  return (
    <section name="experience" className="experience container">
      <div className="title">
        {currentLanguage === LANGUAGES[0] ? 'Опыт' : 'Experience'}
      </div>
    </section>
  );
}
