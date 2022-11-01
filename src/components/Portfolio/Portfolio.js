import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../store/selectors';
import { LANGUAGES, TRANSITION_DURATION } from '../../utils/constants';
import './Portfolio.css';



function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/projects', false, /\.(png|jpe?g|svg)$/));

const projects = [
    {
        title:
        {
            ru: 'Адаптивная верстка',
            en: 'Adaptive layout'
        },
        description: {
            ru: 'Цель: отработка адаптивной верстки по готовому макету для пк, планшетов и смартфонов.',
            en: 'The goal is practicing adaptive layout using ready-made model for pc, tablets and smartphones.'
        },
        img: images[0],
        link: 'https://xeniya-kuz.github.io/adaptive-2/',
        git: 'https://github.com/xeniya-kuz/adaptive-2',
    },
    {
        title:
        {
            ru: 'Калькулятор на Вью',
            en: 'Vue calculator'
        },
        description: {
            ru: 'Простой калькулятор на Вью, который выполняет операции сложения, вычитания, умножения, деления и возведения в степень. При делении на ноль выдает ошибку, позволяет вводить только цифры как с экранной клавиатуры, так и с обычной. Экранная клавиатура простая и скрываемая. Также реализованы юнит тесты для функционала калькулятора.',
            en: 'Performs basic operations. When dividing by zero, it gives an error, it allows you to enter only numbers both from the on-screen keyboard and from the usual one. Unit tests are also implemented.'
        },
        img: images[1],
        link: 'https://xeniya-kuz.github.io/calculatorOnVue/',
        git: 'https://github.com/xeniya-kuz/calculatorOnVue',
    },
    // {
    //     title:
    //     {
    //         ru: 'Мессенджер на Реакт',
    //         en: 'React messenger'
    //     },
    //     description: {
    //         ru: 'Мессенджер на Реакт с использованием redux, redux-thunk и redux-persist. Реализованы функции добавления и удаления чата, изменения его названия, добавления и удаления сообщения в каждый чат, ответ бота. Была работа с API, а именно отработка загрузки, ошибки и успеха.',
    //         en: 'React messenger with redux. The functions of adding and deleting a chat, changing its name, adding and deleting a message to each chat, bot response are implemented. There was work with the API.'
    //     },
    //     img: images[2],
    //     link: 'https://xeniya-kuz.github.io/react_msngr/',
    //     git: 'https://github.com/xeniya-kuz/react_msngr',
    // },
    {
        title:
        {
            ru: 'Мессенджер на Реакт с использованием firebase',
            en: 'React messenger with firebase'
        },
        description: {
            ru: 'Мессенджер на Реакт с использованием redux, redux-thunk, redux-persist и firebase. Реализованы функции добавления и удаления чата, изменения его названия; добавления, удаления и изменения сообщения; авторизация/регистрация. Все это с использованием firebase. Была работа с API, а именно отработка загрузки, ошибки и успеха.',
            en: 'Implemented the functions of adding and deleting a chat, changing its name; adding, deleting and modifying a message; authorization/registration.'
        },
        img: images[3],
        link: 'https://xeniya-kuz.github.io/react_firebase_msngr/',
        git: 'https://github.com/xeniya-kuz/react_firebase_msngr',
    },
    {
        title:
        {
            ru: 'Приложение для подсчета трат на Vue',
            en: 'Vue expenses tracker'
        },
        description: {
            ru: 'Приложение по тратам на Вью с использованием vuex. Можно добавлять, удалять и редактировать записи. Есть такой же вариант на vuetify.',
            en: 'This project uses vuex. You can add, delete and edit entries'
        },
        img: images[4],
        link: 'https://xeniya-kuz.github.io/vueExpenseTracker/',
        git: 'https://github.com/xeniya-kuz/vueExpenseTracker',
    },
    {
        title:
        {
            ru: 'Верстка магазина',
            en: 'Store layout'
        },
        description: {
            ru: 'На главной странице работает добавление товара в корзину, его удаление, подсчет суммы и кол-ва товара. Функционал реализован на Вью.',
            en: 'There is the cart on the main page, where implemented adding or deleting goods, calculating the amount and quantity.'
        },
        img: images[5],
        link: 'https://xeniya-kuz.github.io/shopWithCart/',
        git: 'https://github.com/xeniya-kuz/shopWithCart',
    },
    {
        title:
        {
            ru: 'Параллакс деревянного моря',
            en: 'Sea parallax'
        },
        description: {
            ru: 'Реализация параллакса. Из серии один раз увидеть, чем сто раз услышать.',
            en: 'Parallax effect. Better to see that.'
        },
        img: images[6],
        link: 'https://xeniya-kuz.github.io/SeaParallax/',
        git: 'https://github.com/xeniya-kuz/SeaParallax',
    },
    {
        title:
        {
            ru: 'Параллакс с горами',
            en: 'Montain parallax'
        },
        description: {
            ru: 'Реализация параллакса. Из серии один раз увидеть, чем сто раз услышать.',
            en: 'Parallax effect. You should see that.'
        },
        img: images[7],
        link: 'https://xeniya-kuz.github.io/montain-parallax/',
        git: 'https://github.com/xeniya-kuz/montain-parallax',
    },
    {
        title:
        {
            ru: 'Работа с API',
            en: 'API'
        },
        description: {
            ru: 'Использование Redux, react-router-dom, jquery ajax, GET/POST-запросы.',
            en: 'I used Redux, react-router-dom, jquery ajax.'
        },
        img: images[8],
        // link: '',
        git: 'https://github.com/xeniya-kuz/softlex',
    },

]



export function Portfolio() {


    const currentLanguage = useSelector(getCurrentLanguage);
    const infinite = true;

    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(1000)
    const [items, setItems] = useState([])
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION)
    const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
    const windowElRef = useRef()

    useEffect(() => {
        if (infinite) {
            setItems([
                projects[projects.length - 1],
                ...projects,
                projects[0]
            ])
            setClonesCount({ head: 1, tail: 1 })
            return
        }
        setItems(projects)
    }, [projects, infinite])

    useEffect(() => {
        const resizeHandler = () => {
            const windowElWidth = windowElRef.current.offsetWidth
            setWidth(windowElWidth)
            setOffset(-(clonesCount.head * width)) // to prevent wrong offset
        }

        resizeHandler()
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [clonesCount, width])

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION * 1000)
        }
    }, [transitionDuration])

    useEffect(() => {
        if (!infinite) return

        // с элемента 0 (clone) -> к предпоследнему (реальный)
        if ((offset === 0)) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(width * (items.length - 1 - clonesCount.tail)))
            }, TRANSITION_DURATION * 1000)
            return
        }
        // с элемента n (clone) -> к элементу 1 (реальный)
        if (offset === -(width * (items.length - 1))) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(-(clonesCount.head * width))
            }, TRANSITION_DURATION * 1000)
            return
        }
    }, [offset, infinite, items, clonesCount, width])

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + width
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width
            const maxOffset = -(width * (items.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }


    return (
        <section name='portfolio' className='portfolio container'>
            <div className='title'>{currentLanguage === LANGUAGES[0] ? 'Портфолио' : 'Portfolio'}</div>
            <div className='portfolio__window' ref={windowElRef}>
                < div className='all-items-container'
                    style={{
                        transitionDuration: `${transitionDuration}s`,
                        transform: `translateX(${offset}px)`
                    }}>
                    {items.map((project, indx) => {
                        return (
                            <div key={indx} className='slider__item'
                                style={{
                                    minWidth: `${width}px`
                                }}
                            >
                                <img src={project.img} alt="Text" className='slider__img'></img>
                                <div className='slider__title'>
                                    {currentLanguage === LANGUAGES[0] ? project.title.ru : project.title.en}
                                </div>
                                <div className='slider__description'>
                                    {currentLanguage === LANGUAGES[0] ? project.description.ru : project.description.en}
                                </div>
                                <a href={project.git} className='slider__git' target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon="fa-brands fa-github" />
                                </a>
                                {project.link && <a href={project.link} className='slider__button' target="_blank" rel="noreferrer">Посмотреть</a>}
                            </div>
                        )
                    })}
                </ div>
            </div>
            <div className='arrows'>
                <FontAwesomeIcon className='arrow arrow__left' icon="fa-solid fa-chevron-left" onClick={handleLeftArrowClick} />
                <FontAwesomeIcon className='arrow arrow__right' icon="fa-solid fa-chevron-right" onClick={handleRightArrowClick} />
            </div>
        </section >
    )
}
