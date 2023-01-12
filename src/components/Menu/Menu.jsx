import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { getActiveSection, getCurrentLanguage, getFirstView } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { animationIn, animationOut, firstView } from '../../store/actions';

export function Menu() {

    const currentLanguage = useSelector(getCurrentLanguage);

    // const currentLanguageIndx = LANGUAGES.findIndex(language => language === currentLanguage)

    const menuList = [
        {
            name: {
                ru: 'Обо мне',
                en: 'About'
            },
            link: SECTION_LINKS.about
        },
        {
            name: {
                ru: 'Навыки',
                en: 'Skills'
            },
            link: SECTION_LINKS.skills
        },
        {
            name: {
                ru: 'Портфолио',
                en: 'Portfolio'
            },
            link: SECTION_LINKS.portfolio
        },
        {
            name: {
                ru: 'Образование',
                en: 'Education'
            },
            link: SECTION_LINKS.education
        },
        {
            name: {
                ru: 'Контакты',
                en: 'Contacts'
            },
            link: SECTION_LINKS.contacts
        }
    ]

    const [active, setActive] = useState('');
    const [inactive, setInactive] = useState('');
    const activeSection = useSelector(getActiveSection);
    const first = useSelector(getFirstView);

    const dispatch = useDispatch();

    const handleSetActive = (sec) => {
        setActive(sec);
    }

    useEffect(() => {
        if (first !== 0) {
            dispatch(animationIn(active));
        } else {
            dispatch(firstView(1));
        }

    }, [active])

    useEffect(() => {
        dispatch(firstView(0));
    }, [])

    const handleSetInactive = (sec) => {
        setInactive(sec);
    }

    useEffect(() => {
        if (inactive !== '') {
            dispatch(animationOut(inactive));
        }
    }, [inactive])


    return (

        <nav className='menu__wrap'>
            <ul className='menu'>
                <Link activeClass="menu__item__active" className='menu__item' to={'intro__text'} spy={true} hashSpy={false} smooth={true} offset={0} duration={1000} onSetActive={() => handleSetActive(SECTION_LINKS.home)} onSetInactive={() => handleSetInactive(SECTION_LINKS.home)}>
                </Link>
                {menuList.map(item => {
                    return (
                        <Link activeClass="menu__item__active" className='menu__item' key={item.link} to={item.link} spy={true} hashSpy={false} smooth={true} offset={0} isDynamic={true} duration={1000} onSetActive={() => handleSetActive(item.link)} onSetInactive={() => handleSetInactive(item.link)}>
                            <li className='menu__item__list'>
                                <div className='menu__item__name'>{currentLanguage === LANGUAGES[0] ? item.name.ru : item.name.en}</div>
                                {/* <div className='semicircle'></div> */}
                                {/* <FontAwesomeIcon className='semicircle' icon="fa-solid fa-circle" /> */}
                            </li>
                        </Link>
                    )
                })}
            </ul >
            <Link className={`menu__up animate__animated ${activeSection === '' ? '' : (activeSection !== SECTION_LINKS.home && activeSection !== SECTION_LINKS.education ? 'animate__fadeInUp flex' : 'animate__fadeOutDown flex')}`} to='app' spy={true} hashSpy={false} smooth={true} offset={0} duration={1000}>
                <FontAwesomeIcon className='up' icon="fa-solid fa-circle-arrow-up" />
            </Link>
        </nav >
    )
}