import { Component } from 'react';
import { Link } from 'wouter';
import { obtenerCursos } from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: []
    };
  }

  async componentDidMount() {
    try {
      const cursosObtenidos = await obtenerCursos();
      console.log("Cursos obtenidos en Home.jsx:", cursosObtenidos); 

      if (cursosObtenidos && Array.isArray(cursosObtenidos.Cursos)) {
        // Transformar la respuesta para adaptarla a la vista
        const cursosFormateados = cursosObtenidos.Cursos.map(curso => ({
          id: curso.idCurso,
          grado: curso.idAnio, 
          nombre: `Año ${curso.idAnio} - División ${curso.idDivision}`
        }));

        this.setState({ cursos: cursosFormateados });
      }
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  }

  agruparCursosPorAño = (cursos) => {
    if (!cursos || !Array.isArray(cursos)) {
      return {};
    }
    return cursos.reduce((grupos, curso) => {
      const { grado } = curso;
      if (!grupos[grado]) {
        grupos[grado] = [];
      }
      grupos[grado].push(curso);
      return grupos;
    }, {});
  };

  render() {
    console.log("Estado actual de cursos:", this.state.cursos);
    const { cursos } = this.state;
    const cursosAgrupados = this.agruparCursosPorAño(cursos);

    return (
      <div className='Home'>
        <h2>Bienvenido al Sistema de Planilla Virtual</h2>
        <h4>Gestiona la información de los estudiantes!</h4>

        <div className='Cursos'>
          <h2>Tus Cursos</h2>

          {Object.keys(cursosAgrupados).length === 0 ? (
            <p>No hay cursos disponibles.</p> 
          ) : (
            Object.keys(cursosAgrupados).map((grado) => (
              <div key={grado} className="grupo-curso">
                <h3>{`Año ${grado}`}</h3>
                <div className="lista-cursos">
                  {cursosAgrupados[grado].map((curso) => (
                    <Link
                      key={curso.id}
                      to={`/curso/${curso.id}`}
                      className="curso-item"
                    >
                      {curso.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}