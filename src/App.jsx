import { Component } from 'react';
import { Route, Switch, Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home/Home';
import Login from './componentes/Formularios/Login';
import MenuCurso from './componentes/MenuCurso/MenuCurso';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Logeado: false,
      cursosAsignados: [
        { id: 1, nombre: "1°2", grado: "Primer año" },
        { id: 2, nombre: "1°7", grado: "Primer año" },
        { id: 3, nombre: "7°2", grado: "Séptimo año" },
        { id: 4, nombre: "7°3", grado: "Séptimo año" },
        { id: 5, nombre: "1°8", grado: "Primer año" },
      ],
    };
  }

  // Función para iniciar sesión
  login = () => {
    this.setState({ Logeado: true });
  };

  // Función para cerrar sesión
  logout = () => {
    this.setState({ Logeado: false });
  };

  render() {
    const { Logeado, cursosAsignados } = this.state;

    return (
      <div>
        {/* Pasar Logeado y logout como props al Header */}
        <Header Logeado={Logeado} onLogout={this.logout} />

        <Switch>
          {/* Ruta para el Login */}
          <Route path="/login">
            <Login onLogin={this.login} />
          </Route>

          {/* Ruta para la lista de cursos (Home) */}
          <Route path="/">
            {Logeado ? <Home cursos={cursosAsignados} /> : <Login onLogin={this.login} />}
          </Route>

          {/* Ruta para el menú de un curso específico */}
          <Route path="/curso/:id">
            {(params) => <MenuCurso id={params.id} cursos={cursosAsignados} />}
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}