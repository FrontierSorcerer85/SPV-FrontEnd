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
import { obtenerCursos, obtenerEstudiantesPorCurso } from './componentes/services/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Logeado: false,
      cursosAsignados: [], 
      estudiantes: [], 
      loading: true, //manejar el estado de carga
      error: null,
    };
  }

  verificarToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  };

  // Función para iniciar sesión
  login = () => {
    this.setState({ Logeado: true }, () => {
      localStorage.setItem('isLoggedIn', 'true');
      console.log("Sesión guardada en localStorage:", localStorage.getItem('isLoggedIn'));
    });
  };

  // Función para cerrar sesión
  logout = () => {
    this.setState({ Logeado: false }, () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
      console.log("Sesión eliminada de localStorage:", localStorage.getItem('isLoggedIn'));
    });
  };

  // Obtener los cursos desde el backend
  fetchCursos = async () => {
    try {
      const response = await obtenerCursos();
      console.log("Respuesta de la API:", response); // Verifica la estructura de la respuesta

      // Asegúrate de que la respuesta sea un array
      const cursos = Array.isArray(response) ? response : response.Cursos || [];
      this.setState({ cursosAsignados: cursos, loading: false });
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
      this.setState({ error: "Error al cargar los cursos", loading: false });
    }
  };

  // Obtener los estudiantes de un curso específico
  fetchEstudiantesPorCurso = async (idCurso) => {
    try {
      const estudiantes = await obtenerEstudiantesPorCurso(idCurso);
      this.setState({ estudiantes });
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
      this.setState({ estudiantes: [] });
    }
  };

  componentDidMount() {
    const isLoggedIn = this.verificarToken();
    if (isLoggedIn) {
      this.setState({ Logeado: true });
    }

    // Obtener los cursos al cargar la aplicación
    this.fetchCursos();
  }

  render() {
    const { Logeado, cursosAsignados, estudiantes, loading, error } = this.state;

    if (loading) {
      return <div>Cargando...</div>; // Muestra un mensaje de carga
    }

    if (error) {
      return <div>{error}</div>; // Muestra un mensaje de error
    }

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
            {params => {
              const idCurso = parseInt(params.id, 10); // Obtener el idCurso de los parámetros de la URL
              console.log("ID Curso desde la URL:", idCurso);

              // Verificar que cursosAsignados sea un array
              if (!Array.isArray(cursosAsignados)) {
                console.error("cursosAsignados no es un array:", cursosAsignados);
                return <div>Error: No se pudieron cargar los cursos.</div>;
              }

              // Buscar el curso específico en el array cursosAsignados
              const curso = cursosAsignados.find(curso => curso.idCurso === idCurso);

              // Si no se encuentra el curso, muestra un mensaje de error
              if (!curso) {
                return <div>Curso no encontrado</div>;
              }

              // Si el curso existe, obtener los estudiantes del curso
              this.fetchEstudiantesPorCurso(idCurso);  // Obtener los estudiantes del curso seleccionado

              return <MenuCurso curso={curso} estudiantes={estudiantes} />;
            }}
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