import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    CambioDeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar lógica para manejar el inicio de sesión
        console.log("Iniciando sesión con:", this.state);
    };

    render() {
        return (
            <div className="form-container">
                <h2 className="form-title">Inicia Sesión</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="username" className="form-label">
                        Nombre de usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        className="form-input"
                        placeholder="Ingresa tu nombre de usuario"
                        required
                    />

                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        className="form-input"
                        placeholder="Ingresa tu contraseña"
                        required
                    />

                    <button type="submit" className="form-button">Entrar</button>
                </form>
            </div>
        );
    }
}
