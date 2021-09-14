import React from "react";
import '../../Global.css';
import {NavLink} from "react-router-dom";

class Glavnaya extends React.Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="container-natv content-natv">
                        <nav className="topMenu d-flex justify-content-around">
                            <NavLink to="#" className="active">Размещение строчного объявления</NavLink>
                            <NavLink to="/glavnaya2" className="active-2">Размещение
                                баннерной рекламы </NavLink>
                        </nav>
                        <header className="pd-40 d-flex">
                            <div className="row">
                                <div className="@media">
                                    <a href="#">
                                        <img src="https://natv.kg/static/user/ima/logo.png" alt="" class="logo"/>
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

                        <form className="form">
                            <div className="pd-40 mn">
                                <div className="@media textarea-fons">
                                    <div className="row">
                                        <div className="@media">
                                            <div className="text-title">
                                                <div className="row d-flex justify-content-between">
                                                    <div className="d-flex justify-content-between">
                                                        <h3>ВВЕДИТЕ ТЕКСТ ОБЪЯВЛЕНИЯ</h3>
                                                        <div className="text-right">
                                                            Символов: <span>0</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea className="text-enter" name="text"
                                              placeholder="Отдам даром 0 789 545 654"></textarea>

                                </div>


                                <div className="@media cont">
                                    <h3>Правила заполнения текста</h3>
                                    <p>Уважаемый Рекламодатель!</p>
                                    <ul>
                                        <li>
                                            При заполнении объявления после каждого слова должен обязательно стоять
                                            пробел;
                                        </li>
                                        <li>
                                            Размещенный текст не должен побуждать граждан к насилию, агрессии и опасным
                                            действиям, создающим угрозу жизни и здоровью, а также призывающему к
                                            беспорядку;
                                        </li>
                                        <li>
                                            Рекламодатель самостоятельно несет ответственность за соответствие рекламы
                                            действующему законодательству Кыргызской Республики о рекламе;
                                        </li>
                                        <li>
                                            Если рекламируемый товар/услуга подлежат лицензированию укажите номера
                                            лицензий и наименование органов, выдавшего их и/или укажите «товар
                                            сертифицирован», если рекламируемый товар подлежит обязательной
                                            сертификации;
                                        </li>
                                        <li>
                                            <a href="#">Оплатить можно любым удобным способом:</a>
                                        </li>
                                    </ul>
                                    <p>
                                        <a href="#">
                                            <img src="https://natv.kg/files/media/1/1326.jpg?1510923094325"/>
                                            <img src="https://natv.kg/files/media/1/1327.jpg?1510923098156"/>
                                            <img src="https://natv.kg/files/media/1/1328.jpg?1510923101212"/>
                                            <img src="https://natv.kg/files/media/1/1330.jpg?1510923105669"/>
                                            <img src="https://natv.kg/files/media/1/1325.jpg?1510923112765"/>
                                            <img src="https://natv.kg/files/media/1/1329.jpg?1510923117988"/>
                                            <img src="https://natv.kg/files/media/1/1323.jpg?1510923122060"/>
                                            <img
                                                src="https://natv.kg/files/%D0%BA%D0%B8%D0%B2%D0%B8.jpg?1512388624954"/>
                                            <img
                                                src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472"/>
                                            <img
                                                src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377"/>
                                            <img
                                                src="https://natv.kg/files/%D0%BA%D0%B0%D1%81%D1%81%D0%B0-24.jpg?1512388648609"/>
                                            <img
                                                src="https://natv.kg/files/%D0%A3%D0%BC%D0%B0%D0%B9.jpg?1518082610652"/>
                                            <img src="https://natv.kg/files/MegaPay1.jpg?1519283158089"/>
                                            <img src="https://natv.kg/files/pay24-logo.png"
                                                 width="78"
                                                 height="27"/>
                                        </a>
                                    </p>

                                </div>
                            </div>

                            <div className="pd-40 mt-5 pdb-40">
                                <div className="dflex">
                                    <div className="step d-flex align-items-center">
                                        <div className="numb">1</div>
                                        <div className="text">
                                            <p>
                                                Введите текст вашего объявления
                                            </p>
                                        </div>
                                    </div>
                                    <div className="step d-flex align-items-center">
                                        <div className="numb">2</div>
                                        <div className="text">
                                            <p>
                                                Выберите телеканалы и даты, и нажмите "Разместить объявление"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="step d-flex align-items-center">
                                        <div className="numb">3</div>
                                        <div className="text">
                                            <p>
                                                Оплатите объявление!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-40 channel-list-cont">
                                <h2>ВЫБОР КАНАЛОВ</h2>
                                <div className="channel-list">
                                    <div className="title">
                                        <div className="d-flex justify-content-between mt-4">
                                            <div className="@media">
                                                <label>выберите каналы</label>
                                            </div>
                                            <div className="@media">
                                                <label className="date">укажите даты</label>
                                            </div>
                                            <div className="@media mx">
                                                <label>стоимость</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content-news">
                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1285.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">Рен ТВ</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1305.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">НТС</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1289.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">КТРК</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/2150.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">ЛЮБИМЫЙ HD + CINEMAX HD</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1363.gif_w130_h65_resize.gif"/>
                                                    </div>
                                                    <span className="one-title">ТНТ КЫРГЫЗСТАН</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1356.gif_w130_h65_resize.gif"/>
                                                    </div>
                                                    <span className="one-title">СЕМЕЙНЫЙ + ДОМАШНИЙ</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/2662.png_w130_h65_resize.png"/>
                                                    </div>
                                                    <span className="one-title">BOORSOK TV</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1979.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">RUSSIA TODAY DOCUMENTARY (RТDOC)</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between mt-3 flex-wrap">
                                                <div className="d-flex align-items-center news">
                                                    <div className="img">
                                                        <img
                                                            src="https://natv.kg/cache/files/1831.jpg_w130_h65_resize.jpg"/>
                                                    </div>
                                                    <span className="one-title">АВТОГИД ГАЗЕТА</span>
                                                </div>
                                                <div className="d-flex align-items-center mt-3 wid">
                                                    <p className="show-dates rounded-start"></p>
                                                    <span className="img-calen"></span>
                                                </div>
                                                <div className="d-flex align-items-center mx">
                                                    <span className="price-real">0.0 сом</span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="total">
                                            <div className="more-channel">
                                                <a href="#">больше каналов </a>
                                            </div>
                                            <div className="total-block">
                                                <div className='floatR'>Общая сумма: <span
                                                    className="fw-bold">0 сом</span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="pd-40">
                                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                                    <div className="mbm">
                                        <label>КОНТАКТНЫЙ НОМЕР</label>
                                        <input type="text" name="family" className="form-control rounded input-ntv"
                                               id="family" placeholder="Фамилия"/>
                                    </div>
                                    <div className="mbm">
                                        <label>E-MAIL</label>
                                        <input type="text" name="name" className="form-control rounded input-ntv"
                                               id="name" placeholder="Имя"/></div>
                                    <div className="mbm">
                                        <label>УКАЖИТЕ ФАМИЛИЮ И ИМЯ</label>
                                        <input type="text" name="middle" className="form-control rounded input-ntv"
                                               id="middle" placeholder="Отчество"/></div>
                                </div>
                                <div>
                                    <p>

                                        Поля не обязательны для заполнения. Укажите номер телефона и мы отправим Вам код
                                        для оплаты SMS сообщением.
                                        <br/>
                                        *Оплатите любым удобным способом!
                                    </p>
                                </div>
                                <div className="btn-cont d-flex justify-content-between">
                                    <div className="check-text">
                                        <div>Вам остался один шаг – нажмите разместить и получите код для оплаты!</div>
                                    </div>
                                    <div className="mt-3 d-center">
                                        <img src="img/check.PNG"/>
                                    </div>
                                    <div className="div-btn mt-3">
                                        <input type="submit" name="" value="разместить объявление"
                                               className="btn-ntv  placeorder"/>
                                    </div>
                                </div>


                                <hr/>
                            </div>
                        </form>

                        <footer className="pd-40 d-flex justify-content-between">
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
                                        <img
                                            src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472"/>
                                        <img
                                            src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377"/>
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
                                            <NavLink to="/o_proekte">О
                                                проекте</NavLink>
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
                                        <img
                                            src="https://natv.kg/files/%D0%9F%D0%BE%D1%87%D1%82%D0%B0.jpg?1512388633472"/>
                                        <img
                                            src="https://natv.kg/files/%D0%AD%D0%BB%D1%81%D0%BE%D0%BC.jpg?1512388642377"/>
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
}

export default Glavnaya;