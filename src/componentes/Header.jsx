import { Link, useLocation } from 'wouter';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Exportar el componente en la parte superior
export default function Header({ Logeado, onLogout }) {
  const [location, setLocation] = useLocation();

  // Función para cerrar sesión
  const logout = () => {
    onLogout(); // Llama a la función onLogout para actualizar el estado
    setLocation('/login'); // Redirige al usuario a la página de Login
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-titulo">
          <img 
            src="/LogoCTPOBA.jpg" 
            alt="Logo del sistema" 
            className="header-logo" 
          />
          <h1 className="header-titulo">Planilla Virtual</h1>
        </div>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          {/* Ícono para regresar al Home (solo visible si Logeado es true) */}
          {Logeado && (
            <li>
              <Link to="/" className="icono-regresar">
                <i className="bi bi-house"></i> {/* Ícono de casa */}
              </Link>
            </li>
          )}

          {/* Ícono para cerrar sesión (solo visible si Logeado es true) */}
          {Logeado && (
            <li>
              <i 
                className="bi bi-box-arrow-right icono-cerrar" 
                onClick={logout} // Usar la función logout
                style={{ cursor: 'pointer' }}
              ></i>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}