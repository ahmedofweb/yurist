import { useState, useRef } from "react";
import "./Main.css";
import './Mobile.css'

import { BiPhoneCall } from 'react-icons/bi'
import { BiLogoTelegram } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { BsPersonVcard } from 'react-icons/bs'



function Main( {setModal} ) {
  const [showTxt, setShowTxt] = useState(false);
  const [showBar, setShowBar] = useState(false)
  const barItem = useRef()
  return (
    <div className="urist">
      <div className="burger" onClick={() =>{
        showBar ? setShowBar(false) : setShowBar(true)
      }}>{!showBar ?  <RxHamburgerMenu/> : <GrClose/>}</div>
      {showBar && <nav className="navbar">
        <a className="btn-contact" href="tel:+88003029270"> <BiPhoneCall/> Заказать звонок</a>
        <a className="btn-contact" href="https://t.me/YURIDICHESKIYE_KONSULTATSII"> <BiLogoTelegram/> Телеграм</a>
        <ul className="nav-list" onClick={() => setShowBar(false)}>
          <li className="nav-item" ref={barItem}><a href="#otziv">Отзывы</a></li>
          <li className="nav-item" ref={barItem}><a href="#vapros">Вопросы</a></li>
          <li className="nav-item" ref={barItem}><a href="#nashi_yurist">Наши юристы</a></li>
          <li className="nav-item" ref={barItem}><a href="#stati">Статьи</a></li>
        </ul>
        <button className="register" onClick={() => {setModal(true)}}><CgProfile/> Вход / Регистрация</button>
        <a className='blog' href="https://by-abdulkhamid.netlify.app/"><BsPersonVcard/> Abdulhamid's blog</a>
      </nav>}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero_wrapper">
            <h6 className="glavnaya">Главная / Горячая линия</h6>
            <h1 className="hero_wrapper--title">
              Горячая линия по оказанию юридической помощи онлайн
            </h1>
            <p className="hero_wrapper--desc">
              Профессиональная помощь доступна круглосуточно - заявки
              обрабатываются в любое время дня и ночи. Обращаясь к специалистам
              «100 Юристов», вы можете рассчитывать на прозрачные, понятные
              условия сотрудничества
            </p>
            <div className="hero-btns">
                <button className="btn" onClick={()=> {
                     setModal(true)
                 }}>Задать вопрос юристу</button>
              <a className="tell" href="tel:+88003029270">
                <span className="tell-title"> 8 800 302-92-70 </span>
                <p>Бесплатный звонок юристу 24/7</p>
              </a>
            </div>
            <ul className="hero_wrapper--list">
              <li className="hero_wrapper--item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6L12.75 11.25L18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75L12 12.75C11.5858 12.75 11.25 12.4142 11.25 12L11.25 6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                    fill="#33836E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
                    fill="#33836E"
                  />
                </svg>
                <span className="hero_wrapper--item-title">Круглосуточно</span>
              </li>
              <li className="hero_wrapper--item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 3.75V20.25H20.25V3.75H3.75ZM2.25 3.6C2.25 2.85441 2.85442 2.25 3.6 2.25H20.4C21.1456 2.25 21.75 2.85442 21.75 3.6V20.4C21.75 21.1456 21.1456 21.75 20.4 21.75H3.6C2.85441 21.75 2.25 21.1456 2.25 20.4V3.6Z"
                    fill="#33836E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4.75C12.4142 4.75 12.75 5.08579 12.75 5.5V6.63088C13.7987 6.80659 14.8479 7.28725 15.5303 7.96967C15.8232 8.26256 15.8232 8.73744 15.5303 9.03033C15.2374 9.32322 14.7626 9.32322 14.4697 9.03033C13.9415 8.50209 12.9286 8.08398 11.9798 8.05845C11.4239 8.04349 10.9874 8.16616 10.7082 8.37765C10.4603 8.5654 10.25 8.8865 10.25 9.50001C10.25 9.75463 10.3066 9.92373 10.3803 10.0472C10.4567 10.1751 10.5768 10.2962 10.762 10.4141C11.1625 10.669 11.7281 10.8303 12.4474 11.0264C12.4662 11.0316 12.4852 11.0367 12.5043 11.0419C13.1495 11.2177 13.9306 11.4305 14.5433 11.8204C14.8737 12.0306 15.1832 12.3079 15.4077 12.684C15.6347 13.0644 15.75 13.5046 15.75 14C15.75 15.1018 15.2634 15.942 14.5063 16.4722C13.9915 16.8327 13.3777 17.0337 12.75 17.109V18.5C12.75 18.9142 12.4142 19.25 12 19.25C11.5858 19.25 11.25 18.9142 11.25 18.5V17.0647C10.1574 16.875 9.06956 16.3427 8.40001 15.45C8.15149 15.1186 8.21864 14.6485 8.55001 14.4C8.88138 14.1515 9.35149 14.2186 9.60001 14.55C10.0709 15.1779 11.0251 15.6055 12.0269 15.6415C12.681 15.665 13.2567 15.516 13.6458 15.2435C14.0047 14.9922 14.25 14.6092 14.25 14C14.25 13.7454 14.1934 13.5763 14.1197 13.4528C14.0434 13.3249 13.9232 13.2038 13.738 13.0859C13.3375 12.831 12.772 12.6697 12.0527 12.4736C12.0338 12.4684 12.0148 12.4633 11.9957 12.4581C11.3506 12.2823 10.5694 12.0695 9.95673 11.6796C9.62637 11.4694 9.31681 11.1921 9.09234 10.816C8.86529 10.4357 8.75001 9.99538 8.75001 9.50001C8.75001 8.48349 9.13016 7.69119 9.8025 7.18193C10.2303 6.85793 10.7348 6.6798 11.25 6.60324V5.5C11.25 5.08579 11.5858 4.75 12 4.75Z"
                    fill="#33836E"
                  />
                </svg>
                <span className="hero_wrapper--item-title">Бесплатно </span>
              </li>
              <li className="hero_wrapper--item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.19135 5.06177C8.9304 4.03532 10.1556 3.25 12 3.25C13.8444 3.25 15.0696 4.03532 15.8087 5.06177C16.5202 6.04998 16.75 7.21332 16.75 8V11.25H17.4C18.1456 11.25 18.75 11.8544 18.75 12.6V19.4C18.75 20.1456 18.1456 20.75 17.4 20.75H6.6C5.85442 20.75 5.25 20.1456 5.25 19.4V12.6C5.25 11.8544 5.85442 11.25 6.6 11.25H7.25V8C7.25 7.21332 7.47984 6.04998 8.19135 5.06177ZM8.75 11.25H15.25V8C15.25 7.45335 15.0798 6.61668 14.5913 5.93823C14.1304 5.29802 13.3556 4.75 12 4.75C10.6444 4.75 9.8696 5.29802 9.40865 5.93823C8.92016 6.61668 8.75 7.45335 8.75 8V11.25ZM6.75 12.75V19.25H17.25V12.75H6.75Z"
                    fill="#33836E"
                  />
                </svg>
                <span className="hero_wrapper--item-title">
                  Конфиденциально
                </span>
              </li>
              <li className="hero_wrapper--item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.33167 14.3403C4.45967 14.5917 4.71791 14.75 5 14.75H10.25V21C10.25 21.3248 10.4591 21.6128 10.7681 21.7132C11.077 21.8137 11.4155 21.7038 11.6066 21.4411L19.6066 10.4411C19.7725 10.213 19.7963 9.91103 19.6683 9.65966C19.5403 9.40828 19.2821 9.24999 19 9.24999H13.75V2.99999C13.75 2.67514 13.5409 2.38721 13.2319 2.28675C12.923 2.18629 12.5845 2.29614 12.3935 2.55886L4.39345 13.5589C4.22753 13.787 4.20366 14.0889 4.33167 14.3403ZM12.25 5.30638V9.99999C12.25 10.4142 12.5858 10.75 13 10.75H17.5272L11.75 18.6936V14C11.75 13.5858 11.4142 13.25 11 13.25H6.47283L12.25 5.30638Z"
                    fill="#33836E"
                  />
                </svg>
                <span className="hero_wrapper--item-title">Быстро</span>
              </li>
            </ul>
          </div>
          <img src="./glavniy.png" alt="A person" className="glavniy-img"/>
        </div>
      </section>
      <section className="yuridik_help">
        <div className="yuridik_help-container container">
          <h2 className="yuridik_help--title">Юридическая помощь</h2>
          <p className="yuridik_help--desc">
            Срочно понадобились услуги профессионального юриста или адвоката?
            Решение есть! Наша горячая юридическая линия - возможность
            оперативно, абсолютно бесплатно получить ответ на любой вопрос.
            Теперь не нужно записываться на офлайн-прием и тратить время на
            поездку и очереди перед кабинетом.
            <br />
            Профессиональная помощь доступна круглосуточно - заявки
            обрабатываются в любое время дня и ночи. Обращаясь к специалистам
            «100 Юристов», вы можете рассчитывать на прозрачные, понятные
            условия сотрудничества.
          </p>
        </div>
      </section>
      <section id="stati" className="free_counsultation">
        <div className="free_counsultation-container container">
          <h2 className="free_counsultation--title">
            Как получить бесплатную юридическую консультацию?
          </h2>
          <p className="free_counsultation--desc">
            Задайте вопрос юристу бесплатно круглосуточно и без регистрации
          </p>
          <ul className="free_counsultation--list">
            <li className="free_counsultation--item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.06359 1.25L7.81451 1.25C8.12689 1.25 8.40655 1.44361 8.51651 1.73599L9.97195 5.60588C10.0201 5.73398 10.0323 5.87281 10.0072 6.00735L9.27796 9.91931C10.1743 12.0273 11.6549 13.4439 14.1106 14.7146L17.9756 13.9657C18.1128 13.9391 18.2547 13.9514 18.3853 14.0012L22.2671 15.4804C22.5578 15.5912 22.75 15.87 22.75 16.1812L22.75 19.7655C22.75 21.391 21.3178 22.7101 19.6425 22.3456C16.5889 21.6811 10.9317 19.9923 6.96967 16.0303C3.17453 12.2352 1.90298 6.99252 1.47495 4.15869C1.23072 2.54172 2.52752 1.25 4.06359 1.25ZM7.2953 2.75L4.06359 2.75C3.34457 2.75 2.86556 3.32183 2.95813 3.93467C3.3709 6.66748 4.57852 11.5179 8.03033 14.9697C11.6787 18.6181 16.9825 20.2317 19.9615 20.8799C20.6158 21.0222 21.25 20.524 21.25 19.7655L21.25 16.698L18.051 15.479L14.1427 16.2363C13.9801 16.2678 13.8116 16.2446 13.6636 16.1703C10.7693 14.7176 8.89037 12.9954 7.80364 10.2785C7.75085 10.1466 7.73665 10.0023 7.7627 9.86255L8.49431 5.9381L7.2953 2.75Z"
                  fill="#33836E"
                />
              </svg>
              <h5 className="free_counsultation--item-title">
                По телефону горячей линии
              </h5>
              <span className="tell--title">8 800 302-92-70</span>
              <a to="/popup" className="btn3">
                Заказать звонок
              </a>
            </li>
            <li className="free_counsultation--item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.53033 2.46967C9.82322 2.76256 9.82322 3.23744 9.53033 3.53033L3.81066 9.25H16C18.1818 9.25 19.8831 10.0053 21.0384 11.1966C22.1852 12.3792 22.75 13.9466 22.75 15.5C22.75 17.0534 22.1852 18.6208 21.0384 19.8034C19.8831 20.9947 18.1818 21.75 16 21.75C15.5858 21.75 15.25 21.4142 15.25 21C15.25 20.5858 15.5858 20.25 16 20.25C17.8182 20.25 19.1169 19.6302 19.9616 18.7591C20.8148 17.8792 21.25 16.6966 21.25 15.5C21.25 14.3034 20.8148 13.1208 19.9616 12.2409C19.1169 11.3697 17.8182 10.75 16 10.75H3.81066L9.53033 16.4697C9.82322 16.7626 9.82322 17.2374 9.53033 17.5303C9.23744 17.8232 8.76256 17.8232 8.46967 17.5303L1.46967 10.5303C1.17678 10.2374 1.17678 9.76256 1.46967 9.46967L8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967Z"
                  fill="#33836E"
                />
              </svg>
              <h5 className="free_counsultation--item-title">
                Задать свой вопрос на сайте и получить ответ онлайн
              </h5>
              <a to="/popup" className="btn3">
                Задать вопрос
              </a>
            </li>
            <li className="free_counsultation--item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.25 10C7.25 9.58579 7.58579 9.25 8 9.25L16 9.25C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75L8 10.75C7.58579 10.75 7.25 10.4142 7.25 10Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.25 14C7.25 13.5858 7.58579 13.25 8 13.25L12 13.25C12.4142 13.25 12.75 13.5858 12.75 14C12.75 14.4142 12.4142 14.75 12 14.75L8 14.75C7.58579 14.75 7.25 14.4142 7.25 14Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.6861 3.20043 15.2647 3.98703 16.6245C4.07666 16.7794 4.10792 16.9613 4.07515 17.1373L3.43742 20.5626L6.86272 19.9248C7.0387 19.8921 7.2206 19.9233 7.37554 20.013C8.73533 20.7996 10.3139 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.1437 22.75 8.39536 22.2789 6.87016 21.4492L2.63728 22.2373C2.39423 22.2826 2.14449 22.2051 1.96967 22.0303C1.79485 21.8555 1.71742 21.6058 1.76267 21.3627L2.55076 17.1298C1.72113 15.6046 1.25 13.8563 1.25 12Z"
                  fill="#33836E"
                />
              </svg>
              <h5 className="free_counsultation--item-title">
                Отправить запрос на обратный звонок юриста
              </h5>
              <a to="/popup" className="btn3">
                Отправить запрос
              </a>
            </li>
            <li className="free_counsultation--item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5117 8.44144C10.8196 8.71853 10.8446 9.19275 10.5675 9.50063L10.5575 9.51174C10.2804 9.81963 9.80616 9.84458 9.49828 9.56749C9.1904 9.29039 9.16544 8.81618 9.44254 8.5083L9.45254 8.49718C9.72963 8.1893 10.2038 8.16434 10.5117 8.44144Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5117 8.44144C14.8196 8.71853 14.8446 9.19275 14.5675 9.50063L14.5575 9.51174C14.2804 9.81963 13.8062 9.84458 13.4983 9.56749C13.1904 9.29039 13.1654 8.81618 13.4425 8.5083L13.4525 8.49718C13.7296 8.1893 14.2038 8.16434 14.5117 8.44144Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5117 12.4414C10.8196 12.7185 10.8446 13.1927 10.5675 13.5006L10.5575 13.5117C10.2804 13.8196 9.80616 13.8446 9.49828 13.5675C9.1904 13.2904 9.16544 12.8162 9.44254 12.5083L9.45254 12.4972C9.72963 12.1893 10.2038 12.1643 10.5117 12.4414Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5117 12.4414C14.8196 12.7185 14.8446 13.1927 14.5675 13.5006L14.5575 13.5117C14.2804 13.8196 13.8062 13.8446 13.4983 13.5675C13.1904 13.2904 13.1654 12.8162 13.4425 12.5083L13.4525 12.4972C13.7296 12.1893 14.2038 12.1643 14.5117 12.4414Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5117 16.4414C10.8196 16.7185 10.8446 17.1927 10.5675 17.5006L10.5575 17.5117C10.2804 17.8196 9.80616 17.8446 9.49828 17.5675C9.1904 17.2904 9.16544 16.8162 9.44254 16.5083L9.45254 16.4972C9.72963 16.1893 10.2038 16.1643 10.5117 16.4414Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5117 16.4414C14.8196 16.7185 14.8446 17.1927 14.5675 17.5006L14.5575 17.5117C14.2804 17.8196 13.8062 17.8446 13.4983 17.5675C13.1904 17.2904 13.1654 16.8162 13.4425 16.5083L13.4525 16.4972C13.7296 16.1893 14.2038 16.1643 14.5117 16.4414Z"
                  fill="#33836E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.75 20.4C18.75 21.1456 18.1456 21.75 17.4 21.75H6.6C5.85441 21.75 5.25 21.1456 5.25 20.4V5.6C5.25 4.85442 5.85441 4.25 6.6 4.25H11.25V3.6C11.25 2.85442 11.8544 2.25 12.6 2.25H17.4C18.1456 2.25 18.75 2.85442 18.75 3.6V20.4ZM17.25 20.25V3.75H12.75V5C12.75 5.41421 12.4142 5.75 12 5.75H6.75V20.25H17.25Z"
                  fill="#33836E"
                />
              </svg>
              <h5 className="free_counsultation--item-title">
                Записаться на очную консультацию в офис
              </h5>
              <a to="/popup" className="btn3">
                Отправить запрос
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="container connect">
        <h2>
          Задайте вопрос <br /> юристу бесплатно
        </h2>
        <div className="connect-tel">
          <div className="zakazat">
            <button className="tel-number">
              <p>Номер телефона</p>
              <h3>+7 963 335-87-52</h3>
            </button>
            <a className="btn" href="tel:+7 963 335-87-52">
              Заказать звонок
            </a>
          </div>
          <p>
            Отправляя вопрос, вы соглашаетесь с условиями Пользовательского
            соглашения
          </p>
        </div>
      </section>
      <section className="container block-seo">
        <h2>Блок для SEO текста</h2>
        <p>
          Срочно понадобились услуги профессионального юриста или адвоката?
          Решение есть! Наша горячая юридическая линия – возможность оперативно,
          абсолютно бесплатно получить ответ на любой вопрос. Теперь не нужно
          записываться на офлайн-прием и тратить время на поездку и очереди
          перед кабинетом.{" "}
          {showTxt && (
            <span>
              Профессиональная помощь доступна круглосуточно – заявки
              обрабатываются в любое время дня и ночи. Обращаясь к специалистам
              «100 Юристов», вы можете рассчитывать на прозрачные, понятные
              условия сотрудничества.
            </span>
          )}
        </p>
        <button
          className="btn-showText"
          onClick={() => {
            showTxt ? setShowTxt(false) : setShowTxt(true);
          }}
        >
          {showTxt ? "закрыват текст" : "Показать весь текст"}
        </button>
      </section>
      <section id="otziv" className="container otziv">
        <h2 className="otziv-title">Отзывы наших клиентов</h2>
        <ul className="otziv-list">
          <li className="otziv-item">
            <div className="otziv-info">
              <div className="profil-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 12.75C8.54822 12.75 5.75 15.5482 5.75 19V20C5.75 20.4142 5.41421 20.75 5 20.75C4.58579 20.75 4.25 20.4142 4.25 20V19C4.25 14.7198 7.71979 11.25 12 11.25C16.2802 11.25 19.75 14.7198 19.75 19V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V19C18.25 15.5482 15.4518 12.75 12 12.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75ZM7.25 8C7.25 5.37665 9.37665 3.25 12 3.25C14.6234 3.25 16.75 5.37665 16.75 8C16.75 10.6234 14.6234 12.75 12 12.75C9.37665 12.75 7.25 10.6234 7.25 8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>
                Вадим <br /> <span>02 июля 2023</span>
              </h3>
              <p>
                Хочу поблагодарить Веру Владимировну за оказанную мне помощь,
                объяснила что да как, на душе стало намного легче
              </p>
              <div className="lastElement">
                <h6>Вопрос:</h6>
                <h4 className="item-lastElement">
                  Заберут ли меня в случае общей <br /> мобилизации на войну
                  если я
                </h4>
              </div>
            </div>
          </li>
          <li className="otziv-item">
            <div className="otziv-info">
              <div className="profil-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 12.75C8.54822 12.75 5.75 15.5482 5.75 19V20C5.75 20.4142 5.41421 20.75 5 20.75C4.58579 20.75 4.25 20.4142 4.25 20V19C4.25 14.7198 7.71979 11.25 12 11.25C16.2802 11.25 19.75 14.7198 19.75 19V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V19C18.25 15.5482 15.4518 12.75 12 12.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75ZM7.25 8C7.25 5.37665 9.37665 3.25 12 3.25C14.6234 3.25 16.75 5.37665 16.75 8C16.75 10.6234 14.6234 12.75 12 12.75C9.37665 12.75 7.25 10.6234 7.25 8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>
                Вадим <br />
                <span>02 июля 2023</span>
              </h3>
              <p>
                Спасибо огромное за грамотную помощь. Ответили очень быстро,
                проконсультировали, подсказали и самое главное помогли в моей
                ситуации. Высоко квалифицированный специалист, спасибо
              </p>
              <div className="lastElement">
                <h6>Вопрос:</h6>
                <h4 className="item-lastElement">
                  Заберут ли меня в случае общей <br /> мобилизации на войну
                  если я
                </h4>
              </div>
            </div>
          </li>
          <li className="otziv-item">
            <div className="otziv-info">
              <div className="profil-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 12.75C8.54822 12.75 5.75 15.5482 5.75 19V20C5.75 20.4142 5.41421 20.75 5 20.75C4.58579 20.75 4.25 20.4142 4.25 20V19C4.25 14.7198 7.71979 11.25 12 11.25C16.2802 11.25 19.75 14.7198 19.75 19V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V19C18.25 15.5482 15.4518 12.75 12 12.75Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75ZM7.25 8C7.25 5.37665 9.37665 3.25 12 3.25C14.6234 3.25 16.75 5.37665 16.75 8C16.75 10.6234 14.6234 12.75 12 12.75C9.37665 12.75 7.25 10.6234 7.25 8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>
                Вадим <br /> <span>02 июля 2023</span>
              </h3>
              <p>
                Хочу поблагодарить Веру Владимировну за оказанную мне помощь,
                объяснила что да как, на душе стало намного легче
              </p>
              <div className="lastElement">
                <h6>Вопрос:</h6>
                <h4 className="item-lastElement">
                  Заберут ли меня в случае общей <br /> мобилизации на войну
                  если я
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="nashi_yurist" className="container portal">
        <ul className="portal-list">
          <li className="portal-item">
            <img src="./portal-users.png" alt="" />
            <h3>Гурьянова Вера Владимировна</h3>
            <h5>Юрист, Самара</h5>
            <p>693 консультации</p>
          </li>
          <li className="portal-item">
            <img src="./portal-users.png" alt="" />
            <h3>Кущева Марина Юрьевна</h3>
            <h5>Юрист, Лебедянь</h5>
            <p>693 консультации</p>
          </li>
          <li className="portal-item">
            <img src="./portal-users.png" alt="" />
            <h3>Тарасова Марина Сергеевна</h3>
            <h5>Юрист, Москва</h5>
            <p>693 консультации</p>
          </li>
          <li className="portal-item">
            <img src="./portal-users.png" alt="" />
            <h3>Приходин Николай Валерьевич</h3>
            <h5>Юрист, Краснодар</h5>
            <p>693 консультации</p>
          </li>
          <li className="portal-item">
            <button className="btn-urist-all">Все наши юристы</button>
          </li>
        </ul>
        <div id="vapros" className="portal-form">
          <button className="online">
            <span></span> Онлайн
          </button>
          <h2>Задать вопрос юристу</h2>
          <p>Напишите ваш вопрос мы обязательно вам ответим</p>
          <form className="portal-form-form">
            <textarea className="textarea" cols="30" rows="5" placeholder="Опишите вашу проблему..."></textarea>
            <div className="submitted">
            <div className="user">
              <p>Номер телефона</p>
              <input type="number" className="user-tell" placeholder="" />
            </div>
            <div className="user">
              <p>Ваше имя</p>
              <input
                type="text"
                className="user-name"
                placeholder=""
              />
            </div>
            <button className='submit'>Отправить</button>
            </div>
          </form>
          <p>Отправляя вопрос, вы соглашаетесь с условиями Пользовательского соглашения</p>
        </div>
      </section>
      <section className="spr-material">
        <h2 className="spr-title">Темы справочных материалов</h2>
        <ul className="spr-list">
          <li className="spr-item">
            <h3>А</h3>
            <p>Автокредит <br />
               Авторское право<br />
                Автоюрист<br />
                Административное право</p>
          </li>
          <li className="spr-item">
            <h3>Б</h3>
            <p>Банкротство</p>
          </li>
          <li className="spr-item">
            <h3>В</h3>
            <p>Военное право</p>
          </li>
          <li className="spr-item">
            <h3>Г</h3>
            <p>Гражданское право</p>
          </li>
          <li className="spr-item">
            <h3>Ж</h3>
            <p>Жилищное право</p>
          </li>
          <li className="spr-item">
            <h3>З</h3>
            <p>Земельное право<br />
               Защита прав потребителей</p>
          </li>
          <li className="spr-item">
            <h3>И</h3>
            <p>Ипотека<br />
               Исполнительное производство</p>
          </li>
          <li className="spr-item">
            <h3>К</h3>
            <p>Корпоративное право<br />
               Кредиты</p>
          </li>
          <li className="spr-item">
            <h3>М</h3>
            <p>Медицинское право<br />
               Миграционное право</p>
          </li>
          <li className="spr-item">
            <h3>Н</h3>
            <p>Наследственное право<br />
               Недвижимость</p>
          </li>
          <li className="spr-item">
            <h3>О</h3>
            <p>Образование</p>
          </li>
          <li className="spr-item">
            <h3>С</h3>
            <p>Семейное право<br />
               Соцобеспечение<br />
               Судопроизводство</p>
          </li>
          <li className="spr-item">
            <h3>T</h3>
            <p>Таможенное право<br />
                Трудовое право</p>
          </li>
        </ul>
      </section>
      <a className='blog' href="https://by-abdulkhamid.netlify.app/"><BsPersonVcard/> Abdulhamid's blog</a>
    </div>
  );
}

export default Main;
