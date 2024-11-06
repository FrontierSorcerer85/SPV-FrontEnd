import { Component } from 'react';
import Boton from './Boton';

export default class Home extends Component {
    render() {
        return (
            <div className="container text-center py-5">
                <h1 className="display-4 text-light mb-3">Sistema de Planilla Virtual</h1>
                <p className="lead text-light mb-4">
                    Este sistema permite a los preceptores registrar y gestionar asistencias de profesores y alumnos de manera digital.
                </p>
                
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/asistencias" className="btn btn-primary btn-lg w-100">Registrar Asistencias</Boton>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/cursos" className="btn btn-primary btn-lg w-100">Ver Cursos</Boton>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/estudiantes" className="btn btn-primary btn-lg w-100">Gestionar Estudiantes</Boton>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/profesores" className="btn btn-primary btn-lg w-100">Gestionar Profesores</Boton>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/reportes" className="btn btn-primary btn-lg w-100">Generar Reportes</Boton>
                    </div>
                    <div className="col-md-4 mb-3">
                        <Boton ruta="/configuracion" className="btn btn-secondary btn-lg w-100">Configuración</Boton>
                    </div>
                </div>
            </div>
        );
    }
}
