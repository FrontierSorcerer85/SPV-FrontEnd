import { Component } from 'react';
import { useParams, Link } from 'wouter';

export default function DetalleEstudiante({ cursos }) {
  const { id } = useParams();
  const estudiante = cursos.flatMap(curso => curso.estudiantes).find(est => est.id === parseInt(id));

  if (!estudiante) {
    return <div>Estudiante no encontrado</div>;
  }

  return (
    <div className='detalle-estudiante'>
      <h2>Detalles del Estudiante</h2>
      <p><strong>Nombre:</strong> {estudiante.nombre}</p>
      <p><strong>Apellido:</strong> {estudiante.apellido}</p>
      <p><strong>DNI:</strong> {estudiante.dni}</p>
      <p><strong>Teléfono:</strong> {estudiante.telefono}</p>
      <Link to="/curso/:id" className="btn btn-primary">Volver al curso</Link>
    </div>
  );
}