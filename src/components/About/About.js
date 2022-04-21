import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animationIn, animationOut } from '../../store/actions';
import { getActiveSection, getCurrentLanguage, getInactiveSection } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import './About.css';

export function About() {

    const currentLanguage = useSelector(getCurrentLanguage);
    const activeSection = useSelector(getActiveSection);


    return (
        <div name='about'>
            <section className='about container'>
                <div className='title'>{currentLanguage === LANGUAGES[0] ? 'Обо мне' : 'About'}</div>
                {currentLanguage === LANGUAGES[0] ? <div className='about__text'>Заканчиваю программу переквалификации на GeekBrains в июне. Имею опыт написания проектов на JavaScript, Vue и React.
                    Владею <span className='txt-yellow'> английским </span> языком на уровне <span className='txt-yellow'> upper-intermediate (B2)</span>, < span className='txt-yellow' > японским </span > - на уровне < span className='txt-yellow' > beginner (A1)</span >.
                    Владею < span className='txt-yellow' > мнемоническими техниками</span >.
                    Готова много учиться и умею делать это быстро. </div> :
                    <div className='about__text'>I am finishing the GeekBrains retraining program in June. I have experience writing projects in JavaScript, Vue and React.
                        I speak  <span className='txt-yellow'>English</span> at the level of <span className='txt-yellow'>upper-intermediate (B2)</span>, <span className='txt-yellow'>Japanese</span> - at the level of <span className='txt-yellow'>beginner (A1)</span>.
                        I am proficient in <span className='txt-yellow'>mnemonics</span>.
                        Ready to learn a lot and know how to do it quickly.
                    </div>}
                <div className={`about__motto animate__animated ${activeSection === SECTION_LINKS.about ? 'animate__bounceInDown' : ''}`}>{currentLanguage === LANGUAGES[0] ? `Моя цель - создавать красивый и удобный в использовании продукт` : `I want to create an attractive and identifiable product`}</div>
            </section >
        </div>
    )
}