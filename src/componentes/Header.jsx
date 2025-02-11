import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class Header extends Component {


    render() {
        const { Logeado, onLogout } = this.props;
        return (
            <header className="header">
                    <div className="header-container">
                        <div className="logo-titulo">
                            <img 
                                src="/LogoCTPOBA.jpg" 
                                alt="Logo del sistema" 
                                className="header-logo" 
                            />
                            <h1 className="header-titulo">Planilla Virtual</h1>
                        </div>
                    </div>
                    
                    <nav className="header-nav">
                        <ul className="nav-list">
                        {Logeado && (
                            <li>
                                <i 
                                    className="bi bi-box-arrow-right icono-cerrar" 
                                    onClick={onLogout}
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            </li>
                        )}
                        </ul>
                    </nav>
            </header>
        );
    }
}
