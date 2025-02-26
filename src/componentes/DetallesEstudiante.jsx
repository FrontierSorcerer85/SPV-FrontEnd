import { useParams, Link } from 'wouter';

export default function DetalleEstudiante({ cursos }) {
  const { id } = useParams();
  console.log("ID del estudiante:", id);

  const estudiante = cursos.flatMap(curso => curso.estudiantes).find(est => est.id === parseInt(id));
  console.log("Estudiante encontrado:", estudiante);

  if (!estudiante) {
    return <div>Estudiante no encontrado</div>;
  }

  // Buscar el curso al que pertenece el estudiante
  const curso = cursos.find(curso => curso.estudiantes.some(est => est.id === estudiante.id));
  console.log("Curso encontrado:", curso);

  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className='detalle-estudiante'>
      <h2>Detalles del Estudiante</h2>
      <p><strong>Nombre:</strong> {estudiante.nombre}</p>
      <p><strong>Apellido:</strong> {estudiante.apellido}</p>
      <p><strong>DNI:</strong> {estudiante.dni}</p>
      <p><strong>Teléfono:</strong> {estudiante.telefono}</p>
      {/* Usar el id del curso para redirigir */}
      <Link to={`/curso/${curso.id}`} className="btn btn-primary">
        Volver al curso
      </Link>
    </div>
  );
}