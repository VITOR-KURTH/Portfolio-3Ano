import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/pages/CssPages/Atividades.css';
import styles from '../BancoDeDados/Banco.module.css';
import Express from '../../pages/imagensPages/express.png'
import Chalk from '../../pages/imagensPages/chalk.png'

const Aplicativos = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
        <h1 className={styles.NA}>Não houve atividades de programação de aplicativos no 1° trimestre</h1>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
          <h1 className={styles.NA}>Não houve atividades de programação de aplicativos no 2° trimestre</h1>

        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
          <div className="cardAtividade">
          <img className="FileAtividade" src={Express} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Atividade express</h2>
            <p className="descricaoAtividade">Na aula tivemos que usar o node junto do Express para construir uma aplicação</p><p className="descricaoAtividade">Opinião: Gostei da atividade porque me ajudou a entender melhor o node.</p><p className='descricaoAtividade'>Habilidades: H1, H2</p>
            <button className="abrirAtividade" onClick={() => window.open('https://github.com/VITOR-KURTH/Express.git')}>Repositorio Express</button>
          </div>

          <div className="cardAtividade">
          <img className="FileAtividade" src={Chalk} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Atividade express</h2>
            <p className="descricaoAtividade">Na aula tivemos que fazer um site usando chalk</p><p className="descricaoAtividade">Opinião: Gostei da atividade.</p><p className='descricaoAtividade'>Habilidades: H3, H4</p>
            <button className="abrirAtividade" onClick={() => window.open('https://github.com/VITOR-KURTH/Node-e-Chalk.git')}>Repositorio Chalk</button>
          </div>
        </>
      );
    }
  };

  
  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Programação de aplicativos</h1>
     
        
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

export default Aplicativos;

