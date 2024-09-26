import React from 'react';

export default function RegisterForm({ setButtonPopup }) {
  return (
    <section className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '22rem' }}>
        <h4 className="text-center mb-4">Registrarse</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Repite tu contraseña" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>
        <div className="login-link">
          ¿Ya tienes una cuenta? <button className="btn btn-link" onClick={() => setButtonPopup(true)}>Iniciar sesión</button>
        </div>
      </div>
    </section>
  );
}
