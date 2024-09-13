import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';


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
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGKMSe26pA&#x2F;JAqMsmD2XyIG4YIRcSdFyw&#x2F;view?embed"
        allow="fullscreen"
      />
    </div>
  );
};


const Matematica = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
       
          <div className="cardAtividade">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nNjne-Ufn-c?si=t39Qb4wAzSnwERes" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h2 className="tituloAtividade">Video de angulos</h2>
            <p className="descricaoAtividade">Essa atividade começou com uma introdução a ângulos, para entender o conteúdo, depois tivemos que criar um roteiro para um video que abordasse o que a gente aprendeu, depois tivemos que gravar.</p><p className="descricaoAtividade">Opinião: Essa atividade foi uma das que mais gostei de fazer, criar o roteiro e atuar nas cenas foi legal porque eu não costumo ter atividades assim, então gostei muito, vídeo digno de OSCAR.</p><p className='descricaoAtividade'>Habilidades: C2 - H11</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.youtube.com/embed/nNjne-Ufn-c?si=t39Qb4wAzSnwERes')}>Video</button>
          </div>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
           <div className="cardAtividade">
           <CanvaEmbed1/>
            <h2 className="tituloAtividade">Banco do G</h2>
            <p className="descricaoAtividade"> Na atividade nós formamos grupos para recriar o famoso jogo Banco Imobiliário em uma versão de Florianópolis, recriando todos os elementos do jogo pensando na ilha de Florianópolis.</p><p className="descricaoAtividade">Opinião: Essa foi uma das atividades mais legais de fazer, foi bem interessante pensar em tudo que define Florianópolis e colocar no jogo, por isso gostei bastante!</p><p className='descricaoAtividade'>Habilidades: C3 - H15, H18</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGGnvJ0K38/QrKgZkntSnlZXLJy0qNrig/view')}>Revista</button>
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
        <h1 className='Titulo'>Matemática e suas tecnologias</h1>
        <h3 className='Citacao'>"A matemática possui uma beleza fria e austera, como a de uma escultura; é pura, perfeita e eterna. Ela não se molda à nossa vontade, mas revela verdades que, uma vez descobertas, são imutáveis e universais."  Bertrand Russell</h3>
        
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

export default Matematica;

