import React, { useState } from 'react';
import '../css/LoginPage.css'; // Asegúrate de que la ruta sea correcta

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Controlamos si estamos en la vista de login o de registro

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Iniciando sesión' : 'Registrando usuario', { username, password });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registrando usuario', { username, password });
  };

  return (
    <div className="login-page">
      <h1>{isLogin ? 'Iniciar sesión - login -' : 'Registrarse   sing in -'}</h1> {/* Cambio dinámico de título */}
      <div className="form-container">
        {isLogin ? (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu nombre de usuario"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Iniciar sesión
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu nombre de usuario"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Registrarse
            </button>
          </form>
        )}

        <div className="toggle-form">
          <button
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)} // Cambio entre Login y Register
          >
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
}
