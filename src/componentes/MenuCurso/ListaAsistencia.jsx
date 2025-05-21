import React, { Component } from 'react';


export default class ListaAsistencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mes: '11', 
    };
  }

  render() {
    const { cursos } = this.props;
    const { id } = this.props.params; 
    const curso = cursos.find(curso => curso.id === parseInt(id));

    if (!curso) {
      return <div>Curso no encontrado</div>;
    }

    return (
      <div className="asistencias-container">
        <h1>Planilla de Asistencias</h1>
        <h3>Curso: {curso.nombre}</h3>

        {/* Selector de mes */}
        <div className="selector-mes">
          <select
            className="form-select"
            value={this.state.mes}
            onChange={(e) => this.setState({ mes: e.target.value })}
          >
            <option value="11">Noviembre 2024</option>
            <option value="12">Diciembre 2024</option>
          </select>
        </div>

        {/* Tabla de asistencias */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Estudiante</th>
                {Array.from({ length: 31 }, (_, i) => (
                  <th key={i + 1}>{i + 1}</th>
                ))}
                <th>Total Inasistencias</th>
              </tr>
            </thead>
            <tbody>
              {curso.estudiantes.map((estudiante) => (
                <tr key={estudiante.id}>
                  <td>{`${estudiante.nombre} ${estudiante.apellido}`}</td>
                  {Array.from({ length: 31 }, (_, index) => (
                    <td key={index}></td>
                  ))}
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}