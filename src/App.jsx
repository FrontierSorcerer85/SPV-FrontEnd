import { Component } from 'react';
import { Route, Switch, Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Home from './componentes/Home/Home';
import Login from './componentes/Formularios/Login';
import MenuCurso from './componentes/MenuCurso/MenuCurso';
import DetalleEstudiante from './componentes/DetallesEstudiante';
import ListaAsistencia from './componentes/MenuCurso/ListaAsistencia';
import AñadirAsistencia from './componentes/MenuCurso/AñadirAsistencia';

export default class App extends Component {
  constructor(props) {
    super(props);
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Recuperar de localStorage
    console.log("Sesión recuperada de localStorage:", isLoggedIn);
    this.state = {
      Logeado: isLoggedIn, // Recuperar la sesión
      cursosAsignados: [
        { 
          id: 1, 
          nombre: "7°2", 
          grado: "Septimo año",
          horario: [
            { hora: '08:00 - 10:00', Lunes: 'Matemáticas', Martes: 'Literatura', Miércoles: 'Ciencias', Jueves: 'Historia', Viernes: 'Educación Física' },
            { hora: '10:00 - 12:00', Lunes: 'Física', Martes: 'Química', Miércoles: 'Biología', Jueves: 'Geografía', Viernes: 'Arte' },
          ],
          estudiantes: [
            { id: 1, nombre: 'Joaquín', apellido: 'Sosa Leis', dni: '12353123', telefono: '2901123334' },
            { id: 2, nombre: 'Kevin', apellido: 'Vargas', dni: '12333123', telefono: '2901213122' },
          ]
        },
        {
          id: 2, 
          nombre: "1°7", 
          grado: "Primer año",
          horario: [
            { hora: '08:00 - 10:00', Lunes: 'Matemáticas', Martes: 'Literatura', Miércoles: 'Ciencias', Jueves: 'Historia', Viernes: 'Educación Física' },
            { hora: '10:00 - 12:00', Lunes: 'Física', Martes: 'Química', Miércoles: 'Biología', Jueves: 'Geografía', Viernes: 'Arte' },
          ],
          estudiantes: [
            { id: 3, nombre: 'Ana', apellido: 'Gómez', dni: '45678901', telefono: '2901123335' },
            { id: 4, nombre: 'Luis', apellido: 'Pérez', dni: '45678902', telefono: '2901213123' },
          ]
        },
        // Agrega más cursos con sus respectivos estudiantes
      ],
    };
  }

  // Función para iniciar sesión
  login = () => {
    this.setState({ Logeado: true }, () => {
    localStorage.setItem('isLoggedIn', 'true');
    console.log("Sesión guardada en localStorage:", localStorage.getItem('isLoggedIn'));
  });
  }

  // Función para cerrar sesión
  logout = () => {
    this.setState({ Logeado: false }, () => {
    localStorage.removeItem('isLoggedIn');
    console.log("Sesión eliminada de localStorage:", localStorage.getItem('isLoggedIn'));
  });
  }

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

          <Route path="/estudiante/:id">
            {(params) => <DetalleEstudiante id={params.id} cursos={cursosAsignados} />}
          </Route>

          <Route path="/curso/:id/asistencias">
            {(params) => <ListaAsistencia params={params} cursos={cursosAsignados} />}
          </Route>

          <Route path="/curso/:id/planilla">
            {(params) => <AñadirAsistencia params={params} cursos={cursosAsignados} />}
          </Route>

        </Switch>

        <Footer />
      </div>
    );
  }
}