import { useLocation } from 'wouter'; // Importar useLocation

export default function Login({ onLogin }) {
  const [location, setLocation] = useLocation(); // Hook para manejar la ubicación

  const login = () => {
    onLogin(); // Llama a la función onLogin para actualizar el estado
    setLocation('/'); // Redirige al usuario a la página de Home
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Inicia Sesión</h2>
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); login(); }}>
        <label htmlFor="nombreUsuario" className="login-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="nombreUsuario"
          name="nombreUsuario"
          className="login-input"
          placeholder="Ingresa tu nombre de usuario"
          required
        />

        <label htmlFor="contrasena" className="login-label">
          Contraseña
        </label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          className="login-input"
          placeholder="Ingresa tu contraseña"
          required
        />

        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
}