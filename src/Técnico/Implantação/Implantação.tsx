import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/pages/CssPages/Atividades.css';
import styles from '../BancoDeDados/Banco.module.css'




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
             <h1 className={styles.NA}>Não houve atividades de implantação de sistemas no 2° trimestre</h1>

        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
          <h1 className={styles.NA}>Não houve atividades de implantação de sistemas no 3° trimestre</h1>
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

