import { useSelector } from 'react-redux';
import { getActiveSection, getCurrentLanguage } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import './About.css';

export function About() {
  const currentLanguage = useSelector(getCurrentLanguage);
  const activeSection = useSelector(getActiveSection);

  return (
    <div name="about">
      <section className="about container">
        <div className="title">
          {currentLanguage === LANGUAGES[0] ? 'Обо мне' : 'About'}
        </div>
        {currentLanguage === LANGUAGES[0] ? (
          <div className="about__text">
            Мне нравится искать решения сложных задач. Имею опыт разработки
            проектов на JavaScript, Vue, React, Next (SSR) Владею{' '}
            <span className="txt-yellow"> английским </span> языком на уровне{' '}
            <span className="txt-yellow"> upper-intermediate (B2)</span>,{' '}
            <span className="txt-yellow"> японским </span> - на уровне{' '}
            <span className="txt-yellow"> beginner (A1)</span>. Владею{' '}
            <span className="txt-yellow"> мнемоническими техниками</span>.
            <br />
            <br />
            Стек: JavaScript, TypeScript, React, Next, Sass/Scss, Redux,
            Toolkit, Zustand, Bootstrap, Finder, Material UI, Ajax, Agile
          </div>
        ) : (
          <div className="about__text">
            I'm keen on finding ways to solve complex tasks. I have experience
            developing projects in JavaScript, Vue, React and Next. I speak{' '}
            <span className="txt-yellow">English</span> at the level of{' '}
            <span className="txt-yellow">upper-intermediate (B2)</span>,{' '}
            <span className="txt-yellow">Japanese</span> - at the level of{' '}
            <span className="txt-yellow">beginner (A1)</span>. I am proficient
            in <span className="txt-yellow">mnemonics</span>. I know how to
            learn lots of information quickly.
            <br />
            <br />
            Stack: JavaScript, TypeScript, React, Next, Sass/Scss, Redux,
            Toolkit, Zustand, Bootstrap, Finder, Material UI, Ajax, Agile
          </div>
        )}
        {/* <div
          className={`about__motto animate__animated ${
            activeSection === SECTION_LINKS.about ? 'animate__bounceInDown' : ''
          }`}
        >
          {currentLanguage === LANGUAGES[0]
            ? `Моя цель - создавать красивый и удобный в использовании продукт`
            : `I want to create an attractive and identifiable product`}
        </div> */}
      </section>
    </div>
  );
}
