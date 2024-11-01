import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Login/SupaBaseClient'; 
import "./SuccessPage.css";

function SuccessPage() {
  const [user, setUser ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const checkSessionAndGetUser  = async () => {
    const { data: { session } } = await supabase.auth.getSession(); // Verifica la sesión
    if (session) {
      const { data } = await supabase.auth.getUser (); // Obtiene el usuario
      setUser (data.user);
    } else {
      navigate("/"); // Si no hay sesión, redirige a la página principal
    }
  };

  checkSessionAndGetUser ();
}, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {user ? (
          <>
            <h1>¡Has iniciado sesión con éxito!</h1>
            <p>{user.email}</p>
            <button className="return-button" onClick={() => navigate('/')}>
              Volver a la página principal
            </button>
            <button className="logout-button" onClick={handleSignOut}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <h1>No has iniciado sesión</h1>
            <button className="return-button" onClick={() => navigate('/')}>
              Volver a la página principal
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SuccessPage;