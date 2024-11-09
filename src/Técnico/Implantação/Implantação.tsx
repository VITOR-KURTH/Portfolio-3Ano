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




const Implantação = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
          <div className="cardAtividade">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTqPLJ2YfD2E_DNYUJnPJgSgzpXyQgyJtF4ZZuDRJDBhDHhWiLr1x4m2UWiNXFdIXhFa2LpiEyXWhPe/pub?embedded=true" width={730} height={300}></iframe>
            <h2 className="tituloAtividade">Implantação de um Sistema Para Gerenciamento de Conteúdo - CMS</h2>
            <p className="descricaoAtividade">Na aula tivemos que simular a inplantação de um sistema para uma empresa de carros, também fizemos algumas atividades que faziam parte da Implantação, como por exemplo escolher se o serviço funcionaria em nuvem ou não.</p><p className="descricaoAtividade">Opinião: Foi trabalhoso.</p><p className='descricaoAtividade'></p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1_vrQZkhbZH49Kt7Kdx1CClMY9qG7qi_JLxnMNww3lWg/edit?usp=sharing')}>Docs.</button>
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
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Implantação e manutenção de sistemas</h1>
     
        
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

export default Implantação;

