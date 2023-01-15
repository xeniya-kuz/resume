import { useSelector } from 'react-redux';
import { getActiveSection, getCurrentLanguage } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import './Education.css';

export function Education() {
  const currentLanguage = useSelector(getCurrentLanguage);
  const activeSection = useSelector(getActiveSection);

  return (
    <section name="education" className="education container">
      <div className="title">
        {currentLanguage === LANGUAGES[0] ? 'Образование' : 'Education'}
      </div>

      <div className="education__wrap">
        <div className="relative circle__left">
          <div className="flex">
            <div className="circle-wrap flex">
              <div className="line bc-green"></div>
              <div className="circle circle__green"></div>
              <div className="line bc-green"></div>
            </div>
          </div>
          <div className="absolute">
            <div className="flex">
              <div className="circle-wrap flex">
                <div className="line bc-yellow"></div>
                <div className="circle circle__yellow">
                  <div className="education__number">1</div>
                </div>
                <div className="line bc-yellow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative circle__right">
          <div className="flex">
            <div className="circle-wrap flex">
              <div className="line bc-green"></div>
              <div className="circle circle__green"></div>
              <div className="line bc-green"></div>
            </div>
          </div>
          <div className="absolute">
            <div className="flex">
              <div className="circle-wrap flex">
                <div className="line bc-yellow"></div>
                <div className="circle circle__yellow">
                  <div className="education__number">2</div>
                </div>
                <div className="line bc-yellow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="education__text education__text__left">
          <div
            className={`education__speciality animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            {currentLanguage === LANGUAGES[0]
              ? 'Программная инженерия'
              : 'Software engineering'}
          </div>
          <div
            className={`education__place animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            {currentLanguage === LANGUAGES[0]
              ? 'Ижевский государственный технический университет им. М.Т. Калашникова'
              : 'Kalashnikov Izhevsk State Technical University'}
          </div>
          <div
            className={`education__years animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            2013–2017
          </div>
        </div>
        <div className="education__text education__text_right">
          <div
            className={`education__speciality animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            {currentLanguage === LANGUAGES[0]
              ? 'Frontend - разработчик'
              : 'Frontend - developer'}
          </div>
          <div
            className={`education__place animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            GeekBrains
          </div>
          <div
            className={`education__years animate__animated ${
              activeSection === SECTION_LINKS.education ? 'animate__zoomIn' : ''
            }`}
          >
            2021–2022
          </div>
        </div>
      </div>
    </section>
  );
}
