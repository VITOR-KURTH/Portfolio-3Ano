import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';

const Matematica = () => {
  const navigate = useNavigate();

  return (
      <button className='Voltar'  onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
  );
};

export default Matematica;