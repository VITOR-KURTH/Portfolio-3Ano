import './CssPages/Home.css';
import imagem from '../pages/imagensPages/FotoPerfil.jpg';
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile'


function Home() {
  const originalText = `Olá! Meu nome é Vítor Kurth, tenho 17 anos, nasci em Florianópolis e sou estudante do curso técnico em Análise e Desenvolvimento de Sistemas no Senai.\n\nDesde o meu primeiro contato com um computador, me interessei por tecnologia, programação e jogos, o que me levou a buscar entender mais sobre esse mundo. Por isso, escolhi estudar no Senai.\n\nAlém de tecnologia, há muitas outras coisas que gosto de fazer, como viajar e conhecer culturas diferentes, sair e me divertir com os meus amigos, escutar música e ver filmes e séries e passar horas jogando os jogos que eu amo.\n\nEsse é um breve resumo sobre mim e meu interesse por tecnologia. Espero que aproveite meu portfólio!`;

  const [showHabilidades, setShowHabilidades] = useState(false);

  const [buttonText, setButtonText] = useState<string>('Habilidades');

  const habilidadesText = (
    <div>
     <Profile/>
    </div>
  );

  const handleClick = () => {
    setShowHabilidades(!showHabilidades);
    setButtonText(showHabilidades ? 'Mais' : 'Sobre Mim');
  };

  return (
    
    <div className="container">
      <div className="background-image">

      </div>
      <Navbar/>
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