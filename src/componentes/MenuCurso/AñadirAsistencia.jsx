import React, { Component } from 'react';

export default class AñadirAsistencia extends Component {
    constructor(props) {
        super(props);
      
        // Obtener el id del curso de los parámetros de la ruta
        const { id } = this.props.params;
      
        // Buscar el curso correspondiente en la lista de cursos
        const curso = this.props.cursos.find(curso => curso.id === parseInt(id));
      
        // Verificar si el curso existe
        if (!curso) {
          console.error("Curso no encontrado");
          return;
        }
      
        // Inicializar el estado con los estudiantes del curso
        this.state = {
          estudiantes: curso.estudiantes.map(estudiante => ({
            ...estudiante,
            asistencias: Array(31).fill('') // Inicializar asistencias para cada estudiante
          })),
          estudianteSeleccionado: null,
          diaSeleccionado: 1,
          asistencia: '0', // 0, 1, 1/2, 1/4
        };
      }

  // Función para manejar el cambio en el selector de estudiantes
  cambiarEstudiante = (e) => {
    this.setState({ estudianteSeleccionado: e.target.value });
  };

  // Función para manejar el cambio en el selector de días
  cambiarDia = (e) => {
    this.setState({ diaSeleccionado: parseInt(e.target.value) });
  };

  // Función para manejar el cambio en el selector de asistencia
  cambiarAsistencia = (e) => {
    this.setState({ asistencia: e.target.value });
  };

  // Función para agregar la asistencia
  agregarAsistencia = () => {
    const { estudiantes, estudianteSeleccionado, diaSeleccionado, asistencia } = this.state;

    if (!estudianteSeleccionado) {
      alert('Por favor, selecciona un estudiante.');
      return;
    }

    const estudianteIndex = estudiantes.findIndex(est => est.id === parseInt(estudianteSeleccionado));
    if (estudianteIndex === -1) {
      alert('Estudiante no encontrado.');
      return;
    }

    const nuevasAsistencias = [...estudiantes[estudianteIndex].asistencias];
    nuevasAsistencias[diaSeleccionado - 1] = asistencia;

    const nuevosEstudiantes = [...estudiantes];
    nuevosEstudiantes[estudianteIndex].asistencias = nuevasAsistencias;

    this.setState({ estudiantes: nuevosEstudiantes });
  };

  render() {

    const { estudiantes, estudianteSeleccionado, diaSeleccionado, asistencia } = this.state;

    return (
      <div className="añadir-asistencia-container">
        <h1>Añadir Asistencia</h1>

        {/* Tabla de asistencias */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Estudiante</th>
                {Array.from({ length: 31 }, (_, i) => (
                  <th key={i + 1}>{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{`${estudiante.nombre} ${estudiante.apellido}`}</td>
                  {estudiante.asistencias.map((asistencia, index) => (
                    <td key={index}>{asistencia}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Menú para añadir asistencias */}
        <div className="menu-asistencia">
          <h3>Añadir Asistencia</h3>
          <div className="form-group">
            <label>Estudiante:</label>
            <select
              className="form-control"
              value={estudianteSeleccionado || ''}
              onChange={this.cambiarEstudiante}
            >
              <option value="">Selecciona un estudiante</option>
              {estudiantes.map((estudiante) => (
                <option key={estudiante.id} value={estudiante.id}>
                  {`${estudiante.nombre} ${estudiante.apellido}`}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Día:</label>
            <select
              className="form-control"
              value={diaSeleccionado}
              onChange={this.cambiarDia}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Asistencia:</label>
            <select
              className="form-control"
              value={asistencia}
              onChange={this.cambiarAsistencia}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="1/2">1/2</option>
              <option value="1/4">1/4</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={this.agregarAsistencia}>
            Añadir Asistencia
          </button>
        </div>
      </div>
    );
  }
}