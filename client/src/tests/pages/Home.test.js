import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';

test('renders the home page with correct text', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText('Prueba Técnica')).toBeInTheDocument();
  expect(screen.getByText('Desarrollador Full Stack Javascript')).toBeInTheDocument();
  expect(screen.getByText('Carlos Escorcia')).toBeInTheDocument();
});

test('renders the button and it redirects to login', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const startButton = screen.getByText('Iniciar');
  expect(startButton).toBeInTheDocument();
  expect(startButton.closest('button')).toHaveClass('bg-purple-600');
});
