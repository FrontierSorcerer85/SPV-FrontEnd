import { Component } from 'react';

export default class MenuCurso extends Component {
  render() {
    const { id, cursos } = this.props;

    // Buscar el curso correspondiente al ID
    const curso = cursos.find((curso) => curso.id === parseInt(id));

    return (
      <div className='MenuCurso'>
        <h2>Menú de {curso ? curso.nombre : " Curso Desconocido"}</h2>
        <div className='opciones'>
          <h3>Lista de asistencias</h3>
          <button>Mensuales</button>
          <h3>Agregar asistencias</h3>
          <button>Diarias</button>
        </div>
      </div>
    );
  }
}