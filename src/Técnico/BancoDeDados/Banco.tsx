import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/pages/CssPages/Atividades.css';
import styles from '../BancoDeDados/Banco.module.css'
import Atividade from '../../pages/imagensPages/bancoAlunos.png'

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
        src="https://www.canva.com/design/DAGMYBZCQe8/dPrWiU-OciA8tmPm6Yf2eg/view?embed"
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
        <h1 className={styles.NA}>Não houve atividades de banco de dados no 1° trimestre</h1>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
          <div className="cardAtividade">
          <img className="FileAtividade" src={Atividade} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Lista de Exercícios - Modelo Lógico</h2>
            <p className="descricaoAtividade">Tivemos uma atividade onde tivemos que fazer alguns exercícios de modelos lógicos.</p><p className="descricaoAtividade">Opinião: Essa lista foi boa de fazer porque ajuda a fixar os conceitos.</p><p className='descricaoAtividade'>Habilidades: H1, H2</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1ylBAHTK18ku-x3cTmZF0ZjV3tGJM-C4CJ92Z-IW_cUY/edit?usp=sharing')}>Lista</button>
          </div>

          <div className="cardAtividade">
            <CanvaEmbed1 />
            <h2 className="tituloAtividade">modelagem - consultório médico</h2>
            <p className="descricaoAtividade">Na atividade, tivemos que pesquisar algumas informações sobre Api's, alguns tipos, verbos HTTP, etc.</p><p className="descricaoAtividade">Opinião: Foi muito bom fazer esse trabalho porque ajudou a fixar o conteúdo para a prova.</p><p className='descricaoAtividade'>Habilidades: H1, H2, H3</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGMYBZCQe8/dPrWiU-OciA8tmPm6Yf2eg/view?utm_content=DAGMYBZCQe8&utm_campaign=designshare&utm_medium=embeds&utm_source=link')}>Apresentação</button>
          </div>
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
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
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

