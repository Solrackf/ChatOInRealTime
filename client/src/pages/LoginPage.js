import React from 'react';
import Login from '../components/Login';
import { useAuth } from '../contexts/AuthContext'

function LoginPage() {
  return (
    <div className="login-page flex items-center justify-center w-screen h-screen bg-gray-950">
      <Login />
    </div>
  );
}

export default LoginPage;
