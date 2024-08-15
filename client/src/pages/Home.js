import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 gap-4">
      <img src="/Dev.svg" alt="" className='min-w-8 rounded-full w-40 aspect-square object-cover shadow-2xl border-violet-200 border-4'/>
      <h1 className="text-4xl font-bold leading-none">Prueba Técnica</h1>
      <h3 className="text-8xl font-extrabold m-0 leading-none animate-blurred-fade-in">Carlos Escorcia</h3>
      <h2 className="text-2xl font-semibold leading-none">Desarrollador Full Stack Javascript</h2>
      <button
        onClick={handleStart}
        className="px-6 py-2 bg-violet-800 text-violet-200 font-semibold rounded hover:bg-violet-900 transition"
      >
        Iniciar
      </button>
    </div>
  );
};

export default Home;
