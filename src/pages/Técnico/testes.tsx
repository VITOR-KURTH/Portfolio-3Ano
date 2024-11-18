import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';
import styles from '../Técnico/Banco.module.css';


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
        src="https://www.canva.com/design/DAGWTEl19bE/E1B6T3SUY5Jtlk7VyDgV_w/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};




const Testes = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
        <h1 className={styles.NA}>Não houve atividades de testes de sistemas no 1° trimestre</h1>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
          <h1 className={styles.NA}>Não houve atividades de testes de sistemas no 2° trimestre</h1>
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
     
     <div className="cardAtividade">
    <CanvaEmbed1/>
            <h2 className="tituloAtividade">Apresentação testes de sistemas</h2>
            <p className="descricaoAtividade">Na atividade tivemos que fazer uma apresentação falando dos principais assuntos que estudamos no trimestre.</p><p className="descricaoAtividade">Opinião: Foi legal fazer porque me lembrou alguns assuntos que vimos.</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGWTEl19bE/JKclA4MaeR_bgKx7EOuH0g/edit?utm_content=DAGWTEl19bE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>

        
        </>
      );
    }
  };


  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Testes de sistemas</h1>
     
        
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

export default Testes;

