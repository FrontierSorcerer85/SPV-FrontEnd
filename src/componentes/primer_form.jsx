import React, { Component } from 'react';
import Boton from './Boton';

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idP: '',
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            lugar_nac: '',
            domicilio: '',
            telefono: '',
            idLocalidad: '',
            DNI: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
    };

    render() {
        return (
            <form className="container bg-light p-5 rounded shadow" onSubmit={this.handleSubmit}>
                <h2 className="mb-4 text-center">Registro de Persona</h2>
                
                {Object.keys(this.state).map((field, index) => (
                    <div className="form-group mb-3" key={index}>
                        <label htmlFor={field} className="form-label">{field.replace('_', ' ').toUpperCase()}</label>
                        <input
                            type={field === 'fecha_nacimiento' ? 'date' : 'text'}
                            className="form-control"
                            id={field}
                            name={field}
                            value={this.state[field]}
                            onChange={this.handleChange}
                            required={['nombre', 'apellido', 'DNI'].includes(field)}
                        />
                    </div>
                ))}

                <Boton type="submit" className="btn btn-success w-100">Enviar</Boton>
            </form>
        );
    }
}
