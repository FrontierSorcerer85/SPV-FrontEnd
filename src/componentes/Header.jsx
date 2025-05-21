import { Link, useLocation } from 'wouter';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Exportar el componente en la parte superior
export default function Header({ Logeado, onLogout }) {
  const [location, setLocation] = useLocation();

  // Función para cerrar sesión
  const logout = () => {
    onLogout(); // Llama a la funciin onLogout para actualizar el estado
    setLocation('/login');
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
          {/* Logo para regresar al Home (solo se puede ver si Logeado es true) */}
          {Logeado && (
            <li>
              <Link to="/" className="icono-regresar">
                <i className="bi bi-house"></i>
              </Link>
            </li>
          )}

          {/* logo para cerrar sesion (solo se mira si Logeado es true) */}
          {Logeado && (
            <li>
              <i 
                className="bi bi-box-arrow-right icono-cerrar" 
                onClick={logout}
                style={{ cursor: 'pointer' }}
              ></i>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}