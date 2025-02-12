import { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home/Home';
import Login from './componentes/Formularios/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Logeado: false,
      cursosAsignados: []
    };
  }

  Login = () => {

    const cursosEjemplo = [
      { id: 1, nombre: "1°2", grado: "Primer año" },
      { id: 2, nombre: "1°7", grado: "Primer año" },
      { id: 3, nombre: "2°5", grado: "Segundo año" },
      { id: 4, nombre: "7°2", grado: "Séptimo año" },
      { id: 5, nombre: "7°3", grado: "Séptimo año" },
      { id: 6, nombre: "1°8", grado: "Primer año" },
    ];

    this.setState({ Logeado: true, cursosAsignados: cursosEjemplo });
  };

  Logout = () => {
    this.setState({ Logeado: false });
  };

  render() {
    const { Logeado, cursosAsignados} = this.state;
    return (
    <div>
      <Header Logeado={Logeado} onLogout={this.Logout} />
        {Logeado ? <Home cursos={cursosAsignados}/> : <Login onLogin={this.Login} />}
        <Footer />
    </div>
    );
  }
}
