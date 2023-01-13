import { useSelector } from 'react-redux';
import { getActiveSection, getCurrentLanguage } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../store/actions';
import './Intro.css';

export function Intro() {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(getCurrentLanguage);
  const activeSection = useSelector(getActiveSection);

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <div className="intro">
      <div
        className={`intro__me animate__animated ${
          activeSection === SECTION_LINKS.home ? `animate__fadeInDown` : ''
        }`}
      ></div>
      <div className="intro__gradient">
        <div className="intro__wrap">
          <div className="languages">
            {LANGUAGES.map((language) => {
              return (
                <div
                  className={`${
                    currentLanguage === language
                      ? 'language language__active'
                      : 'language'
                  }`}
                  key={language}
                  onClick={() => handleChangeLanguage(language)}
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>

        <div name="intro__text" className="intro__text">
          <h1 className="intro__name-block">
            {currentLanguage === LANGUAGES[0]
              ? 'Кузнецова Ксения'
              : 'Kuznetsova Kseniia'}
          </h1>
          <h3 className="intro__speciality">
            {currentLanguage === LANGUAGES[0]
              ? 'Frontend - разработчик'
              : 'Frontend - developer'}
          </h3>
        </div>
      </div>
    </div>
  );
}
