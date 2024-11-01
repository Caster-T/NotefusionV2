import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';
import supabase from '../Login/SupaBaseClient'; 
import './SuccessPage.css';

function SuccessPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const checkSessionAndGetUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const { data } = await supabase.auth.getUser();
          setUser(data.user);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error("Error checking session:", error);
        navigate('/');
      }
    };

    checkSessionAndGetUser();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGoHome = () => {
    login();
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {user ? (
          <>
            <h1>Has iniciado sesión con éxito</h1>
            <button className="success-button" onClick={handleGoHome}>
              Volver a la página principal
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
