import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, username, password, role })
    });

    const data = await response.json(); // Obtener el cuerpo de la respuesta
    console.log('Response Status:', response.status); // Imprimir el estado de la respuesta
    console.log('Response Data:', data); // Imprimir los datos de la respuesta

    if (response.status === 201) {
      navigate('/login');
    } else {
      alert(`Registration failed: ${data.msg || 'Unknown error'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <div className='mb-4'>
        <label className='block text-violet-200 text-sm font-semibold mb-2'>Nombre</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900'
          placeholder='Ingresa tu nombre'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-violet-200 text-sm font-semibold mb-2'>Usuario</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          placeholder='Ingresa tu usuario'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-violet-200 text-sm font-semibold mb-2'>Contraseña</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
          placeholder='Ingresa tu contraseña'  
        />
      </div>
      <div className='mb-4'>
        <label className='block text-violet-200 text-sm font-semibold mb-2'>Rol</label>
        <select 
        value={role} 
        onChange={(e) => setRole(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-gray-200"
        >
          <option value="student">Estudiante</option>
          <option value="moderator">Moderador</option>
        </select>
      </div>
      <div className='flex justify-around items-center'>
      <button 
        type="submit" 
        className="register-button w-fit bg-violet-800 text-violet-200 py-2 px-4 rounded-md hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500">
        Registrarme
      </button>
      <div className='flex flex-col items-center justify-center'>
        <span>¿Ya tienes cuenta?</span>
        <Link to="/login" className='underline hover:text-violet-900 text-violet-400'>Ingresar </Link>
      </div>
      </div>
    </form>
  );
}

export default Register;
