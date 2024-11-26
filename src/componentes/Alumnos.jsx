import React, { Component } from 'react';

export default class Alumnos extends Component {
  render() {
    return (
      <div className="container text-center py-5">
        <h1 className="display-4 text-dark mb-3">Lista de Alumnos</h1>
        <p className="lead text-dark mb-4">
          Aquí puedes ver y gestionar los alumnos registrados.
        </p>
        {/* Aquí puedes agregar una tabla o una lista para mostrar alumnos */}
      </div>
    );
  }
}
