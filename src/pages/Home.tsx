import './Home.css';
import imagem from '../pages/imagensPages/FotoPerfil.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TecnologiaProps {
  nome: string;
  imagem: string;
}

const Tecnologia = ({ nome, imagem }: TecnologiaProps) => {
  return (
    <div className="tecnologia">
      <img src={imagem} height="30" alt={nome} />
      <span>{nome}</span>
    </div>
  );
};

const frontend = [
  {
    nome: 'JavaScript',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    nome: 'TypeScript',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    nome: 'HTML5',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    nome: 'CSS3',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    nome: 'React',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

const backend = [
  {
    nome: 'Java',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    nome: 'Spring',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
];

const bancoDeDados = [
  {
    nome: 'MySQL',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    nome: 'PostgreSQL',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

function Home() {
  const originalText = `Olá! Meu nome é Vítor Kurth, tenho 17 anos, nasci em Florianópolis e sou estudante do curso técnico em Análise e Desenvolvimento de Sistemas no Senai.\n\nDesde o meu primeiro contato com um computador, me interessei por tecnologia, programação e jogos, o que me levou a buscar entender mais sobre esse mundo. Por isso, escolhi estudar no Senai.\n\nAlém de tecnologia, há muitas outras coisas que gosto de fazer, como viajar e conhecer culturas diferentes, sair e me divertir com os meus amigos, escutar música e ver filmes e séries e passar horas jogando os jogos que eu amo.\n\nEsse é um breve resumo sobre mim e meu interesse por tecnologia. Espero que aproveite meu portfólio!`;

  const [showHabilidades, setShowHabilidades] = useState(false);

  const [buttonText, setButtonText] = useState<string>('Habilidades');

  const habilidadesText = (
    <div>
      <p>FrontEnd:</p>
      {frontend.map((tecnologia) => (
        <Tecnologia key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} />
      ))}
      <p>BackEnd:</p>
      {backend.map((tecnologia) => (
        <Tecnologia key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} />
      ))}
      <p>Banco de Dados:</p>
      {bancoDeDados.map((tecnologia) => (
        <Tecnologia key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} />
      ))}
    </div>
  );

  const handleClick = () => {
    setShowHabilidades(!showHabilidades);
    setButtonText(showHabilidades ? 'Habilidades' : 'Sobre Mim');
  };

  return (
    
    <div className="container">
      <div className="background-image">

      </div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/areas">Áreas</Link>
        <Link to="/tecnico">Técnico</Link>
        <Link to="/ppe">PPE</Link>
        <div id="indicator"></div>
      </nav>
      <img className="FotoPerfil" src={imagem} />
      <div className='TextoApresentacao'>
        {showHabilidades ? habilidadesText : (
          <p>{originalText.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
        )}
        <button className='habilidades' onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Home;