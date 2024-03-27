import React from 'react'
import logo from './header-logo.png'

function Header(props) {
    return (<header className="container">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bosa Noga" />
                    </a>

                    <div className="collapase navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/catalog.html">Каталог</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about.html">О магазине</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts.html">Контакты</a>
                            </li>
                        </ul>
                        <div>
                            <div className="header-controls-pics">
                                {props.children}
                                <div className="header-controls-pic header-controls-cart">
                                    <div className="header-controls-cart-full">1</div>
                                    <div className="header-controls-cart-menu"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    )

}



export default Header
