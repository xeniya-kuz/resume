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
      <div className="experience__wrap">
        <div className="experience__cube">
          <div className="experience__line line_right_2">
            <p
              className={`experience__text  experience__above animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0]
                ? 'Ваша компания'
                : 'Your company'}
            </p>
            <p
              className={`experience__text experience__under experience__under_no-transform animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0] ? 'наст.вр.' : 'nowadays'}
            </p>
          </div>
          <div className="experience__line line_right_1">
            <p
              className={`experience__text experience__above animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0]
                ? 'Стартап "Совместный труд"'
                : 'Startup "Joint work"'}
            </p>
            <p
              className={`experience__text experience__under animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0]
                ? '11.2022–наст.вр.'
                : '11.2022 – nowadays'}
            </p>
          </div>
          <div className="experience__line">
            <p
              className={`experience__text  experience__above animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0] ? 'Фриланс' : 'Freelance'}
            </p>
            <p
              className={`experience__text experience__under animate__animated ${
                activeSection === SECTION_LINKS.experience
                  ? 'animate__flip'
                  : ''
              }`}
            >
              {currentLanguage === LANGUAGES[0]
                ? '10.2022–наст.вр.'
                : '10.2022 – nowadays'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
