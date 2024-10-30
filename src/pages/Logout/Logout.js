import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://pupykdosdzzurbezcovq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1cHlrZG9zZHp6dXJiZXpjb3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNTA0MDUsImV4cCI6MjA0NTYyNjQwNX0.UdaegPhGjaxAJk34CbdHMqDo5UPHAEKrjkayp3o7mLY"
);

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); 
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;
