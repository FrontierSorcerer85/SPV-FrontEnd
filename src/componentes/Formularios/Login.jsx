import React, { Component } from "react";
import { autenticarUsuario } from "../services/api";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreUsu: "",
      contraseña: "",
    };
  }

  Cambio = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signin = async (e) => {
    e.preventDefault();
    const { nombreUsu, contraseña } = this.state;
    console.log('Nombre de usuario:', nombreUsu);
    console.log('Contraseña:', contraseña);  
    

    try {

      const respuesta = await autenticarUsuario(nombreUsu, contraseña);

      if (respuesta && respuesta.token) {
        localStorage.setItem("token", respuesta.token);
        sessionStorage.setItem("isLoggedIn", "true"); 
        this.props.onLogin();
        window.location.href = "/";
        
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
      alert("Hubo un problema al conectar con el servidor. Intenta nuevamente.");
    }
    
  };

  render() {
    return (
      <div className="login-container">
        <h2 className="login-title">Inicia Sesión</h2>
        <form className="login-form" onSubmit={this.signin}>
          <label htmlFor="nombreUsuario" className="login-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombreUsu"
            className="login-input"
            placeholder="Ingresa tu nombre de usuario"
            autoComplete="username"
            value={this.state.nombreUsu}
            onChange={this.Cambio}
            required
          />

          <label htmlFor="contrasena" className="login-label">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            name="contraseña"
            className="login-input"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
            value={this.state.contraseña}
            onChange={this.Cambio}
            required
          />

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
