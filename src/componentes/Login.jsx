import React, { Component } from 'react';
import Boton from './Boton';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.cambiarMenu) {
      this.props.cambiarMenu('login');
    }
    
  };

  render() {
    return (
      <form className="container bg-light p-5 rounded shadow" onSubmit={this.handleSubmit}>
        <h2 className="mb-4 text-center">Inicio de Sesión</h2>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        <Boton type="submit" className="btn btn-primary w-100">Ingresar</Boton>
      </form>
    );
  }
}
