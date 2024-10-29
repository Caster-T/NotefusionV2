import React, { useEffect, useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import BotonFlecha from "../../Components/Buttons/ButtonArrow/ButtonArrow";
import CampoTexto from "../../Components/CampoTexto/CampoTexto"; 
import ButtonSubmit from "../../Components/Buttons/ButtonSubmit/ButtonSubmit"; 
import Header from '../Home/Header';
import ImageAText from "../../Components/img-disposal/ImageAText";
import imageLogin from "../../assets/images/LoginPicture.jpeg";
import "./login.css";

import { useNavigate } from "react-router-dom";

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';

import { ThemeSupa } from '@supabase/auth-ui-shared';
const customTheme = {
  default: {
    colors: {
      brand: 'hsl(153 60.0% 53.0%)',
      brandAccent: 'hsl(154 54.8% 45.1%)',
      brandButtonText: 'white',
      // ..
    },
  },
  dark: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#2e2e2e',
      defaultButtonBackgroundHover: '#3e3e3e',
      //..
    },
  },
  // You can also add more theme variations with different names.
  evenDarker: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#1e1e1e',
      defaultButtonBackgroundHover: '#2e2e2e',
      //..
    },
  },
}

const supabase = createClient(
  "https://pupykdosdzzurbezcovq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1cHlrZG9zZHp6dXJiZXpjb3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNTA0MDUsImV4cCI6MjA0NTYyNjQwNX0.UdaegPhGjaxAJk34CbdHMqDo5UPHAEKrjkayp3o7mLY"
);

function Login() {
  const navigate2 = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar el estado de autenticación actual
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // Si hay una sesión activa, redirigir a "/success"
        navigate2("/success");
      } else {
        // Si no hay sesión activa, configurar el listener y mostrar el login
        setLoading(false); // Permitir que el componente de autenticación se muestre
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === "SIGNED_IN") {
            navigate2("/success");
          } else if (event === "SIGNED_OUT") {
            navigate2("/");
          }
        });
        
        return () => {
          authListener && authListener.unsubscribe();
        };
      }
    });
  }, [navigate2]);

  // Si está cargando el estado de autenticación, no muestra el componente de autenticación aún
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
