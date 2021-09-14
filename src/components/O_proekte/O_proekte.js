import React from "react";
import '../../Global.css';
import {NavLink} from "react-router-dom";
import Fons from './o_proekte.module.css'

const o_proekte = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="/" className="active-2">Размещение
                            строчного объявления</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">Размещение
                            баннерной рекламы </NavLink>
                    </nav>
                    <header className="pd-40 d-flex">
                        <div className="row">
                            <div className="@media">
                                <a href="#">
                                    <img src="https://natv.kg/static/user/ima/logo.png" alt="" className="logo"/>
                                </a>
                            </div>
                        </div>

                        <div className="langs">
                            <a href="#" className="active">РУ</a>
                            <a href="#">КГ</a>
                        </div>
                        <div className="@media">
                            <div className="text arct">
                                <h1> Размещение бегущей строки на телевизионных каналах Кыргызстана</h1>
                            </div>
                        </div>
                    </header>
                    <div className="pd-40 bg-white page">
                        <h1>ВАША РЕКЛАМА НА ВСЕХ ТЕЛЕКАНАЛАХ КЫРГЫЗСТАНА</h1>
                        <p>
                            Сервис NaTV.kg (НаТВ) – это простой и легкий способ разместить рекламу!<br/>
                            Уже сейчас пользователям сервиса доступна реклама в Бишкеке и на всей территории
                            Кыргызстана.
                            Реклама на телеканалах всей страны теперь доступна каждому!
                        </p>
                        <p>
                            Разместить бегущую строку на все телевизоры Кыргызстана Вы можете, не выходя из дома!
                            Сервис NaTV.kg (НаТВ) создан для быстрого, удобного и легкого размещения бегущей строки.
                        </p>
                        <p>
                            Мы учли все для более легкого размещения бегущей строки:
                            практически все телеканалы страны присутствуют на нашем сайте, доступны удобные способы
                            оплаты, понятный и простой интерфейс.
                        </p>
                        <p>
                            На сегодняшний день Вы можете разместить объявление на телеканалах, которые смотрят по всей
                            Республике.
                            Благодаря бегущей строке Вы можете привлечь внимание как городского населения, так и жителей
                            регионов.
                            Охват аудитории телевидением составляет практически 90% населения.
                            Мы постарались предоставить Вам расширенный список каналов, который будет пополняться
                            постоянно!
                        </p>

                        <p>БЕГУЩАЯ СТРОКА НА ТЕЛЕВИЗОРЕ! ЛЕГКО, БЫСТРО, УДОБНО!</p>
                        <p>Если у Вас есть предложения по работе сервиса и вопросы по сотрудничеству, напишите нам
                            на: <a href="#">info@natv.kg</a></p>
                    </div>
                    <footer className="pd-40 mt-x d-flex justify-content-between">
                        <div className="d-space">
                            <div className="w-ntv">
                                <p className="t-left">©2017. Сервис предоставляется ОсОО "НаТВ"</p>
                                <a href="#">
                                    <img src="https://natv.kg/files/media/1/1326.jpg?1510923094325"/>
                                    <img src="https://natv.kg/files/media/1/1327.jpg?1510923098156"/>
                                    <img src="https://natv.kg/files/media/1/1328.jpg?1510923101212"/>
                                    <img src="https://natv.kg/files/media/1/1330.jpg?1510923105669"/>
                                    <img src="https://natv.kg/files/media/1/1325.jpg?1510923112765"/>
                                    <img src="https://natv.kg/files/media/1/1329.jpg?1510923117988"/>
                                    <img src="https://natv.kg/files/media/1/1323.jpg?1510923122060"/>
                                    <img src="https://natv.kg/files/%D0%BA%D0%B8%D0%B2%D0%B8.jpg?1512388624954"/>
                                    <img src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472"/>
                                    <img src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377"/>
                                    <img
                                        src="https://natv.kg/files/%D0%BA%D0%B0%D1%81%D1%81%D0%B0-24.jpg?1512388648609"/>
                                    <img src="https://natv.kg/files/%D0%A3%D0%BC%D0%B0%D0%B9.jpg?1518082610652"/>
                                    <img src="https://natv.kg/files/MegaPay1.jpg?1519283158089"/>
                                    <img src="https://natv.kg/files/pay24-logo.png"
                                         width="78"
                                         height="27"/>
                                </a>


                            </div>

                            <div className="footer-mx">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">О
                                            проекте</a>
                                    </li>
                                    <li>
                                        <a href="#">Способы
                                            оплаты</a>
                                    </li>
                                    <li>
                                        <a href="#">Для юридических
                                            лиц</a>
                                    </li>
                                    <li>
                                        <a href="#">Вопрос-ответ</a>
                                    </li>
                                    <li>
                                        <a href="#">Видеоинструкция по
                                            размещению</a>
                                    </li>
                                    <li>
                                        <a href="#">Договор
                                            публичной оферты</a>
                                    </li>
                                    <li>
                                        <a href="#">Правила
                                            заполнения текста</a>
                                    </li>
                                </ul>


                            </div>
                        </div>

                        <div className="float-m">
                            <p className="t-align">
                                По вопросам сотрудничества:
                                <a href="mailto:info@natv.kg">info@natv.kg</a>
                                <br/>
                                0 550 44 06 56, звонки пн-пт с 10:00 до 16:00
                            </p>

                            <div className="d-none">
                                <p>©2017. Сервис предоставляется ОсОО "НаТВ"</p>
                                <a href="#">
                                    <img src="https://natv.kg/files/media/1/1326.jpg?1510923094325"/>
                                    <img src="https://natv.kg/files/media/1/1327.jpg?1510923098156"/>
                                    <img src="https://natv.kg/files/media/1/1328.jpg?1510923101212"/>
                                    <img src="https://natv.kg/files/media/1/1330.jpg?1510923105669"/>
                                    <img src="https://natv.kg/files/media/1/1325.jpg?1510923112765"/>
                                    <img src="https://natv.kg/files/media/1/1329.jpg?1510923117988"/>
                                    <img src="https://natv.kg/files/media/1/1323.jpg?1510923122060"/>
                                    <img src="https://natv.kg/files/%D0%BA%D0%B8%D0%B2%D0%B8.jpg?1512388624954"/>
                                    <img src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472"/>
                                    <img src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377"/>
                                    <img
                                        src="https://natv.kg/files/%D0%BA%D0%B0%D1%81%D1%81%D0%B0-24.jpg?1512388648609"/>
                                    <img src="https://natv.kg/files/%D0%A3%D0%BC%D0%B0%D0%B9.jpg?1518082610652"/>
                                    <img src="https://natv.kg/files/MegaPay1.jpg?1519283158089"/>
                                    <img src="https://natv.kg/files/pay24-logo.png"
                                         width="78"
                                         height="27"/>
                                </a>
                            </div>

                        </div>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default o_proekte;