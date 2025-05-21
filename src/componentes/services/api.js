import axios from 'axios';

// URL base de la API 
const API_URL = 'http://localhost:5000';

//Funciones para obtener

//usuarios
export const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(`${API_URL}/usuarios`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return null;
    }
};

//estudiantes
export const obtenerEstudiantes = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/estudiantes`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        return null;
    }
};

//obtener estudiantes especificos
export const obtenerEstudiantesPorCurso = async (idCurso) => {
    try {
        const response = await axios.get(`${API_URL}/api/estudiantes/buscar/`, {
            params: { idCurso: idCurso }
        });
        return response.data.estudiantes;
    } catch (error) {
        console.error("Error al obtener los estudiantes por curso:", error);
        return null;
    }
};

// obtener cursos
export const obtenerCursos = async () => {
    try{
        const response = await axios.get(`${API_URL}/api/cursos`);
        console.log("Respuesta completa de la API:", response);
        console.log("Datos recibidos:", response.data);
        return response.data; 
    } catch (error){
        console.error("Error al obtener los cursos: ", error);
    return [];
    }
}

//obtener usuarios especificos

export const obtenerUsuarioPorId = async (id_usuario) => {
    try {
        const response = await axios.get(`${API_URL}/usuarios/${id_usuario}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        return null;
    }
};


//obtener curso especifico
export const obtenerCursoPorId = async (idCurso) => {
    try{
    const response = await axios.get(`${API_URL}/cursos/buscar/${idCurso}`)
    return response.data;
    } catch (error){
        console.error(`Error al obtener el curso ${idCurso}: `, error);
        return null;
    }
};

// --------Funciones para agregar--------

//agregar usuario

export const autenticarUsuario = async (nombreUsu, contraseña) => {
    try {
        const response = await axios.post(`${API_URL}/api/usuarios/login`, {
            nombreUsu,
            contraseña
        }, {
            headers: { "Content-Type": "application/json" }
        });

        console.log('Respuesta del servidor:', response.data);

        return response.data; 
    } catch (error) {
        console.error("Error al autenticar usuario:", error);
        return null;
    }
};


//agregar curso
export const agregarCurso = async (idAnio, idDivision) => {
    try{
        const nuevoCurso = { idAnio, idDivision };

        const response = await axios.post(`${API_URL}/cursos`, nuevoCurso, {
            headers: {"Content-Type": "application/json"}
        });
        return response.data;
    }   catch (error) {
        console.error("Error al agregar el curso: ", error);
        return null;
    }
}

//--------Funciones para eliminar--------

//eliminar curso 
export const eliminarCurso = async (idCurso) => {
    try {
      const response = await axios.delete(`${API_URL}/cursos/${idCurso}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar el curso ${idCurso}:`, error);
      return null;
    }
};

//eliminar usuario 
export const eliminarUsuario = async (id_usuario) => {
    try {
      const response = await axios.delete(`${API_URL}/usuarios/${id_usuario}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar el usuario ${id_usuario}:`, error);
      return null;
    }
  };