import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/pages/CssPages/Atividades.css';
import styles from '../BancoDeDados/Banco.module.css';
import Atividade from '../../pages/imagensPages/bancoAlunos.png';
import JoinAtividade from '../../pages/imagensPages/atividadejoin.png'

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
            <p className="descricaoAtividade"> Na atividade tivemos que desenvolver dois modelos, um conceitual e um lógico.</p><p className="descricaoAtividade">Opinião:  Essa atividade tivemos que aplicar tudo que aprendemos então me ajudou a ver no que eu preciso melhorar e aperfeiçoar.</p><p className='descricaoAtividade'>Habilidades: H1, H2, H3</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGMYBZCQe8/dPrWiU-OciA8tmPm6Yf2eg/view?utm_content=DAGMYBZCQe8&utm_campaign=designshare&utm_medium=embeds&utm_source=link')}>Apresentação</button>
          </div>

          <div className="cardAtividade">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vRwBtKDm3qTiBIhGTj22WHVscQmXOsYIQ1_8lB-c00hJ7FmjvyAXOcr0TgN9R60MfsoLYVygB-DAqeZ/pub?embedded=true" style={{width: '100%', height:'100%'}}></iframe>
            <h2 className="tituloAtividade">Normalização de dados</h2>
            <p className="descricaoAtividade"> Na atividade tivemos que pesquisar o que é normalização de dados e entender melhor como ela funciona.</p><p className="descricaoAtividade">Opinião: Foi bacana porque me ajudou a entender a importancia da normalização de dados.</p><p className='descricaoAtividade'>Habilidades: H3</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGMYBZCQe8/dPrWiU-OciA8tmPm6Yf2eg/view?utm_content=DAGMYBZCQe8&utm_campaign=designshare&utm_medium=embeds&utm_source=link')}>Apresentação</button>
          </div>
        
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
     
     <div className="cardAtividade">
     <iframe src="https://docs.google.com/document/d/e/2PACX-1vT6ryNAdhXGs1a1pkO83Ziy4CQ4nsg2Pf4SXkOZdfkjACL7-DtYCHLwRWJ8sjQiMnEKQHILrw2thBN0/pub?embedded=true" style={{width: '100%', height:'100%'}}></iframe>
            <h2 className="tituloAtividade">Banco de Dados Biblioteca</h2>
            <p className="descricaoAtividade">Na aula tivemos que criar três tabelas e usar alguns comandos de busca ou mudar alguns dados.</p><p className="descricaoAtividade">Opinião: A atividade me ajudou a entender melhor como cada comando funciona e como posso usar eles.</p><p className='descricaoAtividade'>Habilidades: H4</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1hbzizOiQP5A0lfgA2CyLrTM75ItQiYpiOJxH6tN3VbQ/edit?usp=sharing')}>Docs.</button>
          </div>

          <div className="cardAtividade">
          <img className="FileAtividade" src={JoinAtividade} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Left e Right JOIN no PgAdmin</h2>
            <p className="descricaoAtividade">Na aula tivemos que usar os comandos JOIN para consultar alguns dados das tabelas criadas</p><p className="descricaoAtividade">Opinião: Com a atividade consegui entender melhor como funciona os comandos JOIN como o RIGHT JOIN, INNER JOIN e o LEFT JOIN, então gostei bastante.</p><p className='descricaoAtividade'>Habilidades: H4, H5</p>
            <button className="abrirAtividade" onClick={() => window.open('https://drive.google.com/file/d/1U0OMLgNbF48I0_8aCxWI9TW8RIGxxSvI/view?usp=sharing')}>Arquivo sql</button>
          </div>
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

