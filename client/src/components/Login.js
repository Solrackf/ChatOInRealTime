import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ username, name: data.name }));
      navigate('/chat');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-semibold mb-2">Usuario</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          placeholder="Ingresa tu usuario"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-semibold mb-2">Contraseña</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <div className='flex justify-around items-center'>
        <button 
          type="submit" 
          className="w-fit bg-violet-800 text-violet-200 py-2 px-4 rounded-md hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          Ingresar
        </button>
        <div className='flex flex-col items-center justify-center'>
        <span>¿No tienes una cuenta?</span>
        <Link to="/register" className='underline hover:text-violet-900 text-violet-400'> Regístrate </Link>
        </div>
      </div>
    </form>
  );
  
}

export default Login;
