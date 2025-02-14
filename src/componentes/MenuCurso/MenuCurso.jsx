import { Component } from 'react';
import { Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MenuCurso extends Component {
  render() {
    const { id, cursos } = this.props;

    // Buscar el curso correspondiente al ID
    const curso = cursos.find((curso) => curso.id === parseInt(id));

    // Si no se encuentra el curso, mostrar un mensaje
    if (!curso) {
      return <div>Curso no encontrado</div>;
    }

    // Usar el horario y los estudiantes del curso
    const horarios = curso.horario;
    const estudiantes = curso.estudiantes;

    return (
      <div className='MenuCurso'>
        <h2>Menú de {curso.nombre}</h2>

        <div className='opciones-container'>
          {/* Sección izquierda: Lista de asistencias */}
          <div className='opcion-izquierda'>
            <h3>Lista de asistencias</h3>
            <button>Mensuales</button>
          </div>

          {/* Sección derecha: Agregar asistencias */}
          <div className='opcion-derecha'>
            <h3>Agregar asistencias</h3>
            <button>Diarias</button>
          </div>
        </div>

        {/* Tabla de horarios */}
        <div className='horarios-container'>
          <h3>Horarios del Curso</h3>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index}>
                  <td>{horario.hora}</td>
                  <td>{horario.Lunes}</td>
                  <td>{horario.Martes}</td>
                  <td>{horario.Miércoles}</td>
                  <td>{horario.Jueves}</td>
                  <td>{horario.Viernes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla de estudiantes */}
        <div className='estudiantes-container'>
          <h3>Lista de Estudiantes</h3>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.apellido}</td>
                  <td>{estudiante.dni}</td>
                  <td>{estudiante.telefono}</td>
                  <td>
                    <Link to={`/estudiante/${estudiante.id}`} className="btn btn-info">
                      Más información
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}