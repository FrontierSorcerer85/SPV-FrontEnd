import { Component } from 'react';
import { Link } from 'wouter'; // Importar Link de Wouter

export default class Home extends Component {
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
    const { cursos } = this.props;
    const cursosAgrupados = this.agruparCursosPorAño(cursos);

    return (
      <div className='Home'>
        <h2>Bienvenido al Sistema de Planilla Virtual</h2>
        <h4>Gestiona la información de los estudiantes!</h4>

        <div className='Cursos'>
          <h2>Tus Cursos</h2>

          {Object.keys(cursosAgrupados).map((grado) => (
            <div key={grado} className="grupo-curso">
              <h3>{grado}</h3>
              <div className="lista-cursos">
                {cursosAgrupados[grado].map((curso) => (
                  <Link
                    key={curso.id}
                    to={`/curso/${curso.id}`} // Navegar al menú del curso
                    className="curso-item"
                  >
                    {curso.nombre}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}