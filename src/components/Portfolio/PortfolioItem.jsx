import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LANGUAGES } from '../../utils/constants';
import './Portfolio.css';

export default function PortfolioItem({ project, width, currentLanguage }) {
  return (
    <div
      className="slider__item"
      style={{
        minWidth: `${width}px`,
      }}
    >
      <img src={project.img} alt="Text" className="slider__img"></img>
      <div className="slider__title">
        {currentLanguage === LANGUAGES[0] ? project.title.ru : project.title.en}
      </div>
      <div className="slider__description">
        {currentLanguage === LANGUAGES[0]
          ? project.description.ru
          : project.description.en}
      </div>
      {project.git && (
        <a
          href={project.git}
          className="slider__git"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          className="slider__button"
          target="_blank"
          rel="noreferrer"
        >
          {currentLanguage === LANGUAGES[0] ? 'Посмотреть' : 'Look'}
        </a>
      )}
    </div>
  );
}
