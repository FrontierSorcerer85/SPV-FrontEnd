import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreUsuario: "", 
            contrasena: ""
        };
    }

   Cambio = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

   Envio = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión con:", this.state);
        this.props.onLogin();
    };

    render() {
        return (
            <div className="login-container">
                <h2 className="login-title">Inicia Sesión</h2>
                <form className="login-form" onSubmit={this.Envio}>
                    <label htmlFor="nombreUsuario" className="login-label">
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        id="nombreUsuario"
                        name="nombreUsuario"
                        value={this.state.nombreUsuario}
                        onChange={this.Cambio}
                        className="login-input"
                        placeholder="Ingresa tu nombre de usuario"
                        required
                    />

                    <label htmlFor="contrasena" className="login-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={this.state.contrasena}
                        onChange={this.Cambio}
                        className="login-input"
                        placeholder="Ingresa tu contraseña"
                        required
                    />

                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
        );
    }
}
