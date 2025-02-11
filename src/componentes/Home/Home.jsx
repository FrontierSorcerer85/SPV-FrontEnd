import { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [], // Inicializa cursos como un array vacío
    };
  }
    // Función para agrupar cursos por año
    agruparCursosPorAño = (cursos) => {
        if (!cursos || !Array.isArray(cursos)) {
          return {}; // Retorna un objeto vacío si cursos no es un array
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
        // Supongamos que los cursos se pasan como prop desde App.jsx
        const { cursos } = this.props;

        // Agrupamos los cursos por año
        const cursosAgrupados = this.agruparCursosPorAño(cursos);

        return (
            <div className='Home'>
              <br />
              <br />
              <br />
                <h2>Bienvenido al Sistema de Planilla Virtual</h2>
                <h4>Gestiona la información de los estudiantes!</h4>

                {/* Sección de Cursos */}
                <div className='Cursos'>
                    <h2>Tus Cursos</h2>

                    {/* Mostramos los cursos agrupados por año */}
                    {Object.keys(cursosAgrupados).map((grado) => (
                        <div key={grado} className="grupo-curso">
                            <h3>{grado}</h3>
                            <div className="lista-cursos">
                                {cursosAgrupados[grado].map((curso) => (
                                    <div key={curso.id} className="curso-item">
                                        {curso.nombre}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}