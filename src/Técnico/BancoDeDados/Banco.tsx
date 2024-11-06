import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/pages/CssPages/Atividades.css';
import Api from '../../../src/pages/imagensPages/ApiGithub.png'

const CanvaEmbed1 = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingTop: '56.2500%',
        paddingBottom: 0,
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform',
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
        src="https://www.canva.com/design/DAGAtsW06KI/KtnvV-_JUdsJp1e_rmuPFw/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};





const Banco = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
         <div className="cardAtividade">
            <img className="FileAtividade" src={Api} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Api Github</h2>
            <p className="descricaoAtividade">Na aula foi pedido para fazer uma API que busque o perfil do github através do nome do perfil</p><p className="descricaoAtividade">Opinião: Foi bem interessante essa atividade, gostei bastante de conseguir buscar meu perfil apenas pelo nome.</p><p className='descricaoAtividade'>Habilidades:  H3, H4, H5, H6, H9 e H10</p>
            <button className="abrirAtividade" onClick={() => window.open(Api, '_blank')}>Meme</button>
          </div>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
          
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
     
        </>
      );
    }
  };


  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Banco de dados</h1>
     
        
        {/* Botões para selecionar o trimestre */}
        <div className='botaoTrimestre'>
          <button className={`trimestre-btn ${trimestre === 1 ? 'active' : ''}`} onClick={() => setTrimestre(1)}>1º Trimestre</button>
          <button className={`trimestre-btn ${trimestre === 2 ? 'active' : ''}`} onClick={() => setTrimestre(2)}>2º Trimestre</button>
          <button className={`trimestre-btn ${trimestre === 3 ? 'active' : ''}`} onClick={() => setTrimestre(3)}>3º Trimestre</button>
        </div>

        {/* Renderiza as atividades do trimestre selecionado */}
        {renderAtividades()}
      </div>
    </div>
  );
};

export default Banco;

