import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';
import Post from '../imagensPages/Simple-past.jpg';
import Redacao from '../imagensPages/Redações enviadas.pdf'

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
        src="https://www.canva.com/design/DAGUyXKDhaU/KGn1YMy0jinobLeICtMgjw/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};

const CanvaEmbed2 = () => {
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
        src="https://www.canva.com/design/DAGBmL4Ru8E/BLa6hZmWCVT4zhDfdLABCw/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};



const Linguagens = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
       
          <div className="cardAtividade">
            <CanvaEmbed1/>
            <h2 className="tituloAtividade">Revista literária</h2>
            <p className="descricaoAtividade">Na aula tivemos que fazer uma revista literária com uma crítica ao livro Torto Arado e fazer uma tirinha de uma das histórias do livro Velhos.</p><p className="descricaoAtividade">Opinião: Foi bem legal conversar como poderia ser a revista, a pesquisa do livro Torto Arado e fazer a tirinha do livro velhos também foi muito legal.</p><p className='descricaoAtividade'>Habilidades: H3, H4, H16, H22 e H24</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGC3KRMx-4/eBk-21JNU_frZp7_UVcvZg/edit?utm_content=DAGC3KRMx-4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Revista</button>
          </div>

          <div className="cardAtividade">
           <CanvaEmbed2/>
            <h2 className="tituloAtividade">Pré Modernismo</h2>
            <p className="descricaoAtividade">Foi passado algumas obras pré-modernistas para fazer uma pesquisa e apresentação sobre.</p><p className="descricaoAtividade">Opinião: A obra que eu e meu grupo pesquisamos foi bem legal e acho que nossa apresentação para a turma foi boa.</p><p className='descricaoAtividade'>Habilidades: H3, H4, H16, H22 e H24</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGBmL4Ru8E/-KbgDPBmclW9IlOF5eVviQ/edit?utm_content=DAGBmL4Ru8E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>

          <div className="cardAtividade">
            <img className="FileAtividade" src={Post} alt="Simple past" width={500} height={600}/>
            <h2 className="tituloAtividade">Simple Past</h2>
            <p className="descricaoAtividade">Em grupos tivemos que desenvolver um cartaz de poste de instagram em ingles a partir de uma foto.</p><p className="descricaoAtividade">Opinião: Foi uma atividade bem legal de fazer, já que tivemos que pensar em uma descrição para a foto só observando ela.</p><p className='descricaoAtividade'>Habilidades: H11, H25, H10 e H24</p>
            <button className="abrirAtividade" onClick={() => window.open(Post, '_blank')}>Post</button>
          </div>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
           <div className="cardAtividade">
            <embed className="FileAtividade" src={Redacao} style={{ width: '700px', height: '400px' }} />
            <h2 className="tituloAtividade">Redação online</h2>
            <p className="descricaoAtividade"> Tivemos que realizar uma redação com o tema: Valorização dos profissionais da educação pública e sua importância na qualidade do ensino.</p><p className="descricaoAtividade">opinião: A redação online é muito bom para me preparar para a redação do ENEM.</p><p className='descricaoAtividade'>
            </p>
            <button className="abrirAtividade" onClick={() => window.open(Redacao, '_blank')}>Redação</button>
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
        <button className='Voltar' onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Linguagens e suas tecnologias</h1>
        <h3 className='Citacao'>"A linguagem é um processo de criação livre; suas leis e princípios são fixos, mas a forma como os princípios são usados no desempenho da linguagem é livre e infinitamente variado."  Noam Chomsky</h3>
        
        
        <div className='botaoTrimestre'>
          <button className={`trimestre-btn ${trimestre === 1 ? 'active' : ''}`} onClick={() => setTrimestre(1)}>1º Trimestre</button>
          <button className={`trimestre-btn ${trimestre === 2 ? 'active' : ''}`} onClick={() => setTrimestre(2)}>2º Trimestre</button>
          <button className={`trimestre-btn ${trimestre === 3 ? 'active' : ''}`} onClick={() => setTrimestre(3)}>3º Trimestre</button>
        </div>

        
        {renderAtividades()}
      </div>
    </div>
  );
};

export default Linguagens;

