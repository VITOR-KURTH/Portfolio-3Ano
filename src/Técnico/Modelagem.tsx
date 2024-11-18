import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/CssPages/Atividades.css';
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
        src="https://www.canva.com/design/DAGEjmWgWCc/eDPIduD446Ie5oGNZVNk3Q/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};

const iframeStyle: React.CSSProperties = {
    width: "100%",
    height: "500px",
    border: "none",
  };


const Modelagem = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
          <div className="cardAtividade">
          <iframe src="https://embed.figma.com/design/TgoKAbuPMZ022WJczc2pFc/Site-Inicia%C3%A7%C3%A3o-Cient%C3%ADfica---M%C3%A9dia-Fidelidade-S.A?node-id=47-108&embed-host=share" style={iframeStyle} />
            <h2 className="tituloAtividade">Wiframe de Alta Fidelidade: S.A</h2>
            <p className="descricaoAtividade">Tivemos algumas aula para aprender sobre wiframes e depois desenvolver um de alta fidelidade para a S.A</p><p className="descricaoAtividade">Opinião: Gostei das aulas porque percebi que fazer um Wiframe ajuda muito na hora de construir um projeto.</p><p className='descricaoAtividade'>Habilidades: H2, H3, H4, H5</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.figma.com/design/TgoKAbuPMZ022WJczc2pFc/Site-Inicia%C3%A7%C3%A3o-Cient%C3%ADfica---M%C3%A9dia-Fidelidade-S.A?t=6MKKeNVlQX4Segkr-1')}>Wiframe</button>
          </div>

          <div className="cardAtividade">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJHuF9IP5kC4WigujxpixEQEpc5GVTOSidYhTuhGt3opOp2NbGoLGiNQiG9Wk3X-00b1pgcxLFsNiA/pubhtml?widget=true&amp;headers=false" width={730} height={450}></iframe>
            <h2 className="tituloAtividade">Regra de negócio da S.A</h2>
            <p className="descricaoAtividade"> Nas aulas tivemos que pensar nas regras de negócio do nosso projeto da S.A.</p><p className="descricaoAtividade">Opinião: : Gostei da atividade porque ajuda a estabelecer o que tem que ter nos projetos.</p><p className='descricaoAtividade'>Habilidades:  H2, H3, H4, H8</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/spreadsheets/d/1pN2ldEnHwP-fTeyR9M1V9z5tyjMpS1YPQyft4lG1ZAs/edit?usp=sharing')}>Regras de negócio</button>
          </div>  
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
         <div className="cardAtividade">
          <CanvaEmbed1/>
            <h2 className="tituloAtividade">Metodologias de desenvolvimento</h2>
            <p className="descricaoAtividade"> Nas aulas tivemos que escolher uma das metodologias de desenvolvimento para montar uma aula inversa onde fizemos uma aula sobre a metodologia DevOps.</p><p className="descricaoAtividade">Opinião: Gostei bastante de fazer essa aula invertida e de pesquisar sobre o DevOps, também foi legal assistir os outros grupos apresentando.</p><p className='descricaoAtividade'>Habilidades: H3, H5 e H8</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGEjmWgWCc/dDpMsayK6pleNRzpUpwsbw/edit?utm_content=DAGEjmWgWCc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>  
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
        <h1 className={styles.NA}>Não houve atividades de modelagem de sistemas no 3° trimestre</h1>

        </>
      );
    }
  };


  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/tecnico', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Modelagem de sistemas</h1>
     
        
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

export default Modelagem;

