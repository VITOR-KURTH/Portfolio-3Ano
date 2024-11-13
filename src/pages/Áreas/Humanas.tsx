import { useState } from 'react';
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
        src="https://www.canva.com/design/DAF-i0PThuQ/cl0tsvlWHqvaRdti4Vk2vw/view?embed"
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
        src="https://www.canva.com/design/DAGHFFtSmvI/9ZdCwZgRDHuNtkGBYjRozA/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};

const CanvaEmbed3 = () => {
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
        src="https://www.canva.com/design/DAGB01Gizv0/gk8budsBzVdBY80PgHmBuQ/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};

const CanvaEmbed4 = () => {
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
        src="https://www.canva.com/design/DAGVs2l1SmM/O4ilzVIBVkrGHuV-VmepQA/view?embed"
        allow="fullscreen"
      />
    </div>
  );
};



const Humanas = () => {
  const navigate = useNavigate();
  const [trimestre, setTrimestre] = useState(1); 

  const renderAtividades = () => {
    if (trimestre === 1) {
      return (
        <>
       
          <div className="cardAtividade">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTk7EiihxkJ_1FL-EnDb_buO6SDn17NrR4CXPjdVo9awSFmbot0D4StoYmwfYAjWOpaiFs8zy7x68DG/pub?embedded=true" width={730} height={300}></iframe>
            <h2 className="tituloAtividade">Filme 1917</h2>
            <p className="descricaoAtividade">Na aula nós assistimos um filme que retrata a história de um soldado com uma missão de entregar uma mensagem, depois de assistir o filme tivemos que responder a algumas perguntas.</p><p className="descricaoAtividade">Opinião: O filme é muito legal, interresante e imersivo já que não há cortes, apenas em um momento do filme, sendo também bem fiel as questões retratadas na guerra, além de que foi legal responder as perguntas do documento.</p><p className='descricaoAtividade'>Habilidades: C2 - H11</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1lsL4PH5CHEIY_a_VlgWkOl-GVQrZCDOct8vKuJn25gk/edit?usp=sharing')}>Doc. filme 1917</button>
          </div>

          <div className="cardAtividade">
          <CanvaEmbed1/>
            <h2 className="tituloAtividade">Colonização Indonésia</h2>
            <p className="descricaoAtividade">Na aula tivemos que escolher algum país da África ou Ásia para pesquisar sobre sua colonização e montar uma apresentação e depois assistimos um vídeo sobre como a Etiópia resistiu a colonização.</p><p className="descricaoAtividade">Opinião: A aula foi legal, achei muito interessante as pesquisas que fiz sobre a Indonésia, também foi bem curioso ver como a Etiópia nunca foi colonizada e virou exemplo para os outros países do continente.</p><p className='descricaoAtividade'>Habilidades: C6 - H39</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAF-i0PThuQ/5PiLpFdizhUMo7AsU73KbQ/edit?utm_content=DAF-i0PThuQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>

          <div className="cardAtividade">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vS157y_UqMpm5sSqE7U9JtaB9uR-bqwQy6StzSrLT7CLpBDzEqOWprcooZZ21DhbeG6T0graAY5L1zm/pub?embedded=true" width={730} height={300}></iframe>
            <h2 className="tituloAtividade">Análise da pintura "Progresso Americano" e "gravura do início do século XX"</h2>
            <p className="descricaoAtividade">Na aula nós assistimos um vídeo sobre as leis Jim Crow, e fizemos também dois documentos analisando a pintura "Progresso Americano" e a gravura do início do século XX.</p><p className="descricaoAtividade">Opinião: Analisar as pinturas para entendê-las e assistir o vídeo foi interessante porque entendi mais sobre os assuntos.</p><p className='descricaoAtividade'>Habilidades:  C3 - H15, H16</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vS157y_UqMpm5sSqE7U9JtaB9uR-bqwQy6StzSrLT7CLpBDzEqOWprcooZZ21DhbeG6T0graAY5L1zm/pub?embedded=true')}>Doc. Progesso Americano</button>
          </div>
        </>
      );
    } else if (trimestre === 2) {
      return (
        <>
           <div className="cardAtividade">
           <CanvaEmbed2/>
            <h2 className="tituloAtividade">Análise filme</h2>
            <p className="descricaoAtividade">Nessa atividade tivemos que analisar algumas características totalitárias retratadas em filmes de nossa escolha, meu grupo escolheu analisar o filme Duna, durante a aula também assistimos um vídeo falando um pouco sobre essas características no filme "O Rei Leão".</p><p className="descricaoAtividade">Opinião: Gostei bastante de fazer essa atividade, porque percebi detalhes que não vi quando assisti o filme pela primeira vez.</p><p className='descricaoAtividade'>Habilidades:  C2 - H10, C6 - H39</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGHFFtSmvI/gpOAeNBIpfRNwxJlvXoUQg/edit?utm_content=DAGHFFtSmvI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>
          <div className="cardAtividade">
          <CanvaEmbed3/>
            <h2 className="tituloAtividade">Atividade Journal du peuple</h2>
            <p className="descricaoAtividade">Na aula vimos alguns jornais com notícias dos anos 20 e entendemos um pouco quais eram os principais assuntos da época, depois montamos um jornal de algum páis da nossa escolha e abordando algum assunto da época.</p><p className="descricaoAtividade">Opinião: Essa atividade foi muito legal, gostei bastante de imaginar como eram retratadas as notícias e propagandas presentes nos jornais.</p><p className='descricaoAtividade'>Habilidades: C2 - H10, C6 - H39</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGB01Gizv0/gk8budsBzVdBY80PgHmBuQ/view?utm_content=DAGB01Gizv0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd0cbd4a4c0')}>Jornal</button>
          </div>
         
        </>
      );
    } else if (trimestre === 3) {
      return (
        <>
         <div className="cardAtividade">
         <iframe src="https://docs.google.com/document/d/e/2PACX-1vQiPOBhlbyItUXEOMLifDFAET-tEQsdbLN_4VoNrSm-8xG80Qcg0zfVraO3PEZSH5js-ZEYIC6HP_dY/pub?embedded=true" width={730} height={300}></iframe>
          <h2 className="tituloAtividade" >Tensões politicas</h2>
            <p className="descricaoAtividade">Na aula tivemos uma explicação sobre as tensões politicas, o massacre de manguninhos, propaganda anticomunista desenvolvida pelo Ipes e a influência dos Estados Unidos na política brasileira no começo da década de 1960, depois fizemos uma atividade pesquisando sobre algum pesquisador do instituto Oswaldo Cruz.</p><p className="descricaoAtividade">Opinião: A aula foi bem interresante, gostei bastante de entender melhor o que acontecia no Brasil naquela época e pesquisar sobre a vida acadêmica do Renato Sérgio Balão Cordeiro.</p><p className='descricaoAtividade'>Habilidades: C2 - H10, C6 - H39, H34, H35</p>
            <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1cuafnmBguAnR62O0AO1FBxdthqbQI-gPLazMQcdkj2w/edit?usp=sharing')}>Docs.</button>
          </div>

          <div className="cardAtividade">
         <CanvaEmbed4/>
          <h2 className="tituloAtividade" >Construção Capital</h2>
            <p className="descricaoAtividade">Na aula foi explicado como foi a Construção da capital Brasília, como foi planejada e concretizada, a escolha do arquiteto oscar niemeyer para a criação do projeto, além de como ela funciona hoje, depois nós tivemos que criar a nossa capital escolhendo nome, localização, criando a planta baixa e imaginando como poderia ser os prédios públicos, além de outras informações.</p><p className="descricaoAtividade">Opinião: Foi uma das atividades mais legais do ano, pensar e projetar a capital do Brasil.</p><p className='descricaoAtividade'>Habilidades: C2 - H10, C6 - H39, H34, H35</p>
            <button className="abrirAtividade" onClick={() => window.open('https://www.canva.com/design/DAGVs2l1SmM/yq0SBeTMeyFtAOPYk4CIPg/edit?utm_content=DAGVs2l1SmM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')}>Apresentação</button>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <div className="pagina-wrapper">
        <button className='Voltar' onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
        <h1 className='Titulo'>Ciências Humanas</h1>
        <h3 className='Citacao'>"A natureza fez o homem feliz e bom, mas a sociedade deprava-o e torna-o miserável." Jean-Jacques Rousseau</h3>
        
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

export default Humanas;

