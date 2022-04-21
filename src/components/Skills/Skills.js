import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getActiveSection, getCurrentLanguage, getInactiveSection } from '../../store/selectors';
import { LANGUAGES, SECTION_LINKS } from '../../utils/constants';
import './Skills.css';


const skills = [
    {
        icon: 'fa-github',
        row: 'skill__first-row',
        column: 'skill__first-column',
        animationIn: 'animate__fadeInTopLeft',
        animationOut: 'animate__fadeOutTopLeft'
    },
    {
        icon: 'fa-react',
        row: 'skill__first-row',
        column: 'skill__second-column',
        animationIn: 'animate__fadeInDown',
        animationOut: 'animate__fadeOutDown'
    },
    {
        icon: 'fa-node-js',
        row: 'skill__first-row',
        column: 'skill__third-column',
        animationIn: 'animate__fadeInDown',
        animationOut: 'animate__fadeOutDown'
    },
    {
        icon: 'fa-css3-alt',
        row: 'skill__first-row',
        column: 'skill__fourth-column',
        animationIn: 'animate__fadeInTopRight',
        animationOut: 'animate__fadeOutTopRight'
    },
    {
        icon: 'fa-js-square',
        row: 'skill__second-row',
        column: 'skill__first-column',
        animationIn: 'animate__fadeInBottomLeft',
        animationOut: 'animate__fadeOutBottomLeft'
    },
    {
        icon: 'fa-vuejs',
        row: 'skill__second-row',
        column: 'skill__second-column',
        animationIn: 'animate__fadeInUp',
        animationOut: 'animate__fadeOutUp'
    },
    {
        icon: 'fa-figma',
        row: 'skill__second-row',
        column: 'skill__third-column',
        animationIn: 'animate__fadeInUp',
        animationOut: 'animate__fadeOutUp'
    },
    {
        icon: 'fa-html5',
        row: 'skill__second-row',
        column: 'skill__fourth-column',
        animationIn: 'animate__fadeInBottomRight',
        animationOut: 'animate__fadeOutBottomRight'
    },

]

export function Skills() {

    const currentLanguage = useSelector(getCurrentLanguage);
    const activeSection = useSelector(getActiveSection);
    const inactiveSection = useSelector(getInactiveSection);



    return (
        <div name='skills'>
            <section className='skills container'>

                <div className='title'>{currentLanguage === LANGUAGES[0] ? 'Навыки' : 'Skills'}</div>
                <div className='skills__wrap'>
                    {skills.map(skill => {
                        return (
                            <div className={`skill__circle animate__animated ${activeSection === SECTION_LINKS.skills ? `${skill.animationIn} flex` : ''} ${inactiveSection === SECTION_LINKS.skills ? `${skill.animationOut} flex` : ''}`} key={skill.icon}>
                                <FontAwesomeIcon className={`skill ${skill.row} ${skill.column}`} icon={`fa-brands ${skill.icon}`} />
                            </div>
                        )
                    })}
                </div>
            </section >
        </div>
    )
}