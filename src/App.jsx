import { Component } from 'react';
import { Redirect, Route } from "wouter";
import Home from "./componentes/Home";
import Formulario from "./componentes/primer_form";
import Login from "./componentes/Login";
import Alumnos from "./componentes/Alumnos";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "alumnos"
    };
  }

  render() {
    return (
      <div className="App bg-light min-vh-100 d-flex flex-column">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container">
            <a className="navbar-brand" href="/">Planilla Virtual</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/alumnos">Alumnos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/formulario">Formulario</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container-fluid flex-grow-1">
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login cambiarMenu={(opcion) => this.setState({ menu: opcion })} />
          </Route>
          <Route path="/alumnos">
            <Alumnos cambiarMenu={(opcion) => this.setState({ menu: opcion })} />
          </Route>
          <Route path="/formulario">
            <Formulario onSubmit={(data) => console.log(data)} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
          <Route path="/asistencias">
  <div className="text-center">
    <h2 className="text-light">Registrar Asistencias</h2>
    <p className="text-light">En construcción...</p>
  </div>
</Route>
<Route path="/cursos">
  <div className="text-center">
    <h2 className="text-light">Cursos Disponibles</h2>
    <p className="text-light">En construcción...</p>
  </div>
</Route>
<Route path="/estudiantes">
  <Alumnos />
</Route>
<Route path="/profesores">
  <div className="text-center">
    <h2 className="text-light">Gestión de Profesores</h2>
    <p className="text-light">En construcción...</p>
  </div>
</Route>
<Route path="/reportes">
  <div className="text-center">
    <h2 className="text-light">Generar Reportes</h2>
    <p className="text-light">En construcción...</p>
  </div>
</Route>
<Route path="/configuracion">
  <div className="text-center">
    <h2 className="text-light">Configuración</h2>
    <p className="text-light">En construcción...</p>
  </div>
</Route>

        </div>

        {/* Footer */}
        <footer className="bg-dark text-light text-center py-3 mt-4">
          <p className="mb-0">&copy; 2023 Sistema de Planilla Virtual</p>
        </footer>
      </div>
    );
  }
}
