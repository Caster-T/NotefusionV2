import React, { useEffect, useState } from 'react';
import "./login.css";
import { useNavigate } from "react-router-dom";
import supabase from './SupaBaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      navigate("/success");
    } else {
      setLoading(false); // Mostrar el componente de autenticación si no hay sesión activa
    }
  };

  checkSession();

  const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    } else if (event === "SIGNED_OUT") {
      navigate("/");
    }
  });

  // Limpiar el listener al desmontar el componente
  return () => {
    if (authListener && typeof authListener.unsubscribe === 'function') {
      authListener.unsubscribe();
    }
  };
}, [navigate]);
  if (loading) return null;

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
          providers={["discord"]}
        />
      </div>
    </div>
  );
}

export default Login;