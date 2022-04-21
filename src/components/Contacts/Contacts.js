import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'react-scroll/modules/components/Link';
import './Contacts.css';
export function Contacts() {




    return (
        <section name='contacts' className='contacts'>
            <div className='container contacts__wrap'>
                <div className='contacts__left'>
                    <a href='https://t.me/ksufik355' target="_blank" rel="noreferrer" className='contacts__icon__wrap'><FontAwesomeIcon className='contacts__icon contacts__icon_mr1' icon="fa-brands fa-telegram" /></a>
                    <a href='https://vk.com/ksufik' target="_blank" rel="noreferrer" className='contacts__icon__wrap'><FontAwesomeIcon className='contacts__icon contacts__icon_mr1' icon="fa-brands fa-vk" /></a>
                    <a href='https://www.linkedin.com/in/kseniia-kuznetsova' target="_blank" rel="noreferrer" className='contacts__icon__wrap'><FontAwesomeIcon className='contacts__icon contacts__icon_mr1' icon="fa-brands fa-linkedin" /></a>
                    <a href='mailto:xeniyakuz@yandex.ru' target="_blank" rel="noreferrer" className='contacts__icon__wrap'><FontAwesomeIcon className='contacts__icon contacts__icon_mr1' icon="fa-solid fa-envelope" /></a>
                </div>
                <div className='contacts__right'>
                    <Link className='contacts__icon__wrap' to='app' spy={true} hashSpy={false} smooth={true} offset={0} duration={1000}>
                        <FontAwesomeIcon className='contacts__icon' icon="fa-solid fa-circle-arrow-up" />
                    </Link>

                </div>
            </div>
        </section >
    )
}