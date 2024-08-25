import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';

const Ciencias = () => {
  const navigate = useNavigate();

  return (
    <div>
        
    <button className='Voltar' onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
    <h1 className='Titulo'>Ciências da natureza</h1>
    <div className='botaoTrimestre'></div>

    <div className='cardAtividade'>
      <h2 className='tituloAtividade'>Meme Evolução</h2>
      <img src=''/>
    </div>
  </div>
  
  );
};

export default Ciencias;