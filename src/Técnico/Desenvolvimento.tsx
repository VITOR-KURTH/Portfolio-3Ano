import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Técnico/Banco.module.css';
import '../pages/CssPages/Atividades.css';
import Api from '../pages/imagensPages/ApiGithub.png'
import Horas from '../pages/imagensPages/calcHoras.png'
import Biblioteca from '../pages/imagensPages/biblio (1)/Frango do G/Diagrama Classe Biblioteca.png'

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
        src="https://www.canva.com/design/DAGVvsy0k9w/_fkEX6u55ok7CrhFhS9mqw/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};



const Desenvolvimento = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
         <div className="cardAtividade">
            <img className="FileAtividade" src={Api} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Api Github</h2>
            <p className="descricaoAtividade">Na aula foi pedido para fazer uma API que busque o perfil do github através do nome do perfil.</p><p className="descricaoAtividade">Opinião: Foi bem interessante essa atividade, gostei bastante de conseguir buscar meu perfil apenas pelo nome.</p><p className='descricaoAtividade'>Habilidades: H3, H4, H5, H6, H9 e H10</p>
            <button className="abrirAtividade" onClick={() => window.open('https://github.com/VITOR-KURTH/API-GITHUB.git')}>Rep. Api</button>
          </div>

          <div className="cardAtividade">
            <img className="FileAtividade" src={Horas} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Calculadora de horas</h2>
            <p className="descricaoAtividade">Na aula fizemos uma Calculadora de horas utilizando react.</p><p className="descricaoAtividade">Opinião: Foi bem legal a atividade, gostei bastante de entender como fazer essa calculadora.</p><p className='descricaoAtividade'>Habilidades: H3, H4, H5, H6, H9 e H10</p>
            <button className="abrirAtividade" onClick={() => window.open('https://github.com/VITOR-KURTH/Calculadora-de-horas-3B.git')}>Rep. Calculadora</button>
          </div>

          <div className="cardAtividade">
            <CanvaEmbed1 />
            <h2 className="tituloAtividade">Trabalho Api</h2>
            <p className="descricaoAtividade">Na atividade, tivemos que pesquisar algumas informações sobre Api's, alguns tipos, verbos HTTP, etc.</p><p className="descricaoAtividade">Opinião: Foi muito bom fazer esse trabalho porque ajudou a fixar o conteúdo para a prova.</p><p className='descricaoAtividade'>Habilidades: H3, H4, H5, H6, H9 E H10</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGVvsy0k9w/eBA_OeD82LotppnY_AhpRQ/edit?utm_content=DAGVvsy0k9w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>

          
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
          <div className="cardAtividade">
            <img className="FileAtividade" src={Biblioteca} alt="Meme Evolução" style={{width: '100%', height:'100%'}}/>
            <h2 className="tituloAtividade">Projeto biblioteca</h2>
            <p className="descricaoAtividade">Durante algumas aulas nós desenvolvemos um projeto java para uma biblioteca, junto do banco de dados e um diagrama de classe.</p><p className="descricaoAtividade">Opinião: Foi uma atividade longa de fazer mas abordou muitos conteúdos diversos, apesar do trabalho extenso foi bem legal.</p><p className='descricaoAtividade'></p>
            <button className="abrirAtividade" onClick={() => window.open('https://github.com/VITOR-KURTH/Projeto-Biblioteca.git')}>Rep. projeto biblioteca</button>
          </div>
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
     <h1 className={styles.NA}>Não houve atividades de desenvolvimento de sistemas no 3° trimestre</h1>
        </>
      );
    }
  };


  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Desenvolvimento</h1>
     
        
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

export default Desenvolvimento;

