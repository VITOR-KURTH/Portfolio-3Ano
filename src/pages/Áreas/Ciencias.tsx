import { useNavigate } from 'react-router-dom';
import '../CssPages/Atividades.css';
import Meme from '../imagensPages/ME RECUSO A ACREDITAR QUE VIM DISSO!.png';
import Resistores from '../imagensPages/Cópia de Atividade prática resistores.pdf';
import Revisao from '../imagensPages/Imagem do WhatsApp de 2024-04-04 à(s) 10.55.49_631aba2e.jpg';

const CanvaEmbed = () => {
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
        src="https://www.canva.com/design/DAGAtsW06KI/KtnvV-_JUdsJp1e_rmuPFw/view?embed"
      
        allow="fullscreen"
      />
    </div>
  );
};

const Ciencias = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className="pagina-wrapper">

      <button className='Voltar' onClick={() => navigate('/areas', { replace: true })}>Voltar</button>
      <h1 className='Titulo'>Ciências da natureza</h1>
      <h3 className='Citacao'>"A imaginação é mais importante que o conhecimento. Pois o conhecimento é limitado, ao passo que a imaginação abrange o mundo inteiro, estimulando o progresso, dando origem à evolução."  ⠀
      Albert Einstein</h3>
      <div className='botaoTrimestre'></div>

      <div className="cardAtividade">
        <img className="FileAtividade" src={Meme} alt="Meme Evolução" />
        <h2 className="tituloAtividade">Meme Evolução - População de coelhos</h2>
        <p className="descricaoAtividade">Para esta atividade, eu tive que simular o comportamento de uma população de coelhos e do ambiente em um programa e anotar tudo o que observei comforme ia mudando as características, depois tive criar um meme com o tema de ciências</p><p className="descricaoAtividade">Habilidades: C2 - H11</p><p className="descricaoAtividade">Opinião: Apesar de ter perdido a explicação do professor por estar em casa doente, usar o simulador foi um jeito legal de conseguir observar como certas populações se comportam, fazer o meme também foi uma ideia criativa de atividade</p>
        <button className="abrirAtividade" onClick={() => window.open(Meme, '_blank')}>Meme</button>
        <button className="abrirAtividade" onClick={() => window.open('https://docs.google.com/document/d/1SbkMefp3NLv3uRqhGEzYQNRSsLc0BWTsVB_ci2P-Wa4/edit?usp=sharing', '_blank')}>Simulação</button>
      </div>
      <div className="cardAtividade">
        <embed className="FileAtividade" src={Resistores} style={{ width: '80%', height: '80%' }} />
        <h2 className="tituloAtividade">Prática com resistores</h2>
        <p className="descricaoAtividade">Na aula, fizemos uma atividade avaliativa em grupos para construir um circuito com resistores para acender leds com uma pilha</p><p className="descricaoAtividade">Habilidades: C2 - H6, C6 - H34</p><p className="descricaoAtividade">Opinião: Fazer todo o circuito e observar as voltagens com o ampímetro foi muito legal, fazer essa prática foi uma das melhores atividades do ano, até eu queimar meu dedo...</p>
 
        <button className="abrirAtividade" onClick={() => window.open(Resistores, '_blank')}>Resistores</button>
      </div>
      <div className="cardAtividade">
      <img className="FileAtividade" src={Revisao} style={{ width: '40%', height: '40%' }} />
        <h2 className="tituloAtividade">Revisão orgânica</h2>
        <p className="descricaoAtividade">Nessa aula tivemos apenas ver uma breve apresentação e pesquisar sobre assuntos variados de orgânica e anotar no caderno ou em um documento</p><p className="descricaoAtividade">Habilidades: C1 - H3, H4, H5</p><p className="descricaoAtividade">Opinião: A apresentação foi boa porque foi breve mas com bom conteúdo e optar fazer a revisão no caderno foi uma boa escolha porque assim tinha consulta para a prova</p>
 
        <button className="abrirAtividade" onClick={() => window.open(Revisao, '_blank')}>Revisão orgânica</button>
      </div>
      <div className="cardAtividade">
      <CanvaEmbed />
        <h2 className="tituloAtividade">Revisão orgânica</h2>
        <p className="descricaoAtividade">Nessa aula tivemos apenas ver uma breve apresentação e pesquisar sobre assuntos variados de orgânica e anotar no caderno ou em um documento</p><p className="descricaoAtividade">Habilidades: C1 - H3, H4, H5</p><p className="descricaoAtividade">Opinião: A apresentação foi boa porque foi breve mas com bom conteúdo e optar fazer a revisão no caderno foi uma boa escolha porque assim tinha consulta para a prova</p>
 
        <button className="abrirAtividade" onClick={() => window.open(Revisao, '_blank')}>Revisão orgânica</button>
      </div>
    </div>
    </div>
  );
};

export default Ciencias;