import './CssPages/Home.css';
import imagem from '../pages/imagensPages/FotoPerfil.png';
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Profile from '../Components/Profile/Profile';
import '../App.css';

function Home() {
  const originalText = `Olá! sou Vítor Kurth, tenho 17 anos, nasci em Florianópolis e estudo no SESI SENAI no técnico em desenvolvimento de sistemas.

Desde muito cedo tenho contato com computadores e tecnologia, desenvolvendo em mim um grande interesse por tecnologia e jogos.

Gosto também de experimentar coisas novas, viajar, jogar e me divertir com meus amigos.

Espero que aproveite meu portfólio!`;

  const [showHabilidades, setShowHabilidades] = useState(false);
  const [, setButtonText] = useState('Habilidades');

  const habilidadesText = (
    <div>
      <Profile />
    </div>
  );

  const handleClick = () => {
    setShowHabilidades(!showHabilidades);
    setButtonText(showHabilidades ? 'Mais' : 'Sobre Mim');
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <Navbar />
      
      <div className="cardMe">
        <div className="tools">
          <div className="circle"><span className="red box"></span></div>
          <div className="circle"><span className="yellow box"></span></div>
          <div className="circle"><span className="green box"></span></div>
        </div>
        <div className="card__content">
          <img className="FotoPerfil" src={imagem} alt="Foto de Perfil" />
          <h1 className="Nome">Vítor Kurth</h1>
          <hr className='linha'></hr>
          <div className="social-media">
        <a href="https://www.linkedin.com/in/v%C3%ADtor-kurth/" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" alt="linkedin logo" />
        </a>
        <a href="https://www.instagram.com/vitor_kurth/" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" alt="instagram logo" />
        </a>
        <a href="https://github.com/VITOR-KURTH" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github logo" />
        </a>
      </div>
        </div>
      </div>
      
      <div className="TextoApresentacao">
        <div className="tools">
          <div className="circle"><span className="red box"></span></div>
          <div className="circle"><span className="yellow box"></span></div>
          <div className="circle"><span className="green box"></span></div>
        </div>
        {showHabilidades ? habilidadesText : (
          <p>
            {originalText.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
        )}
        
        <div className="botoes">
          <button className="habilidades" onClick={handleClick}>Mais</button>
          <button
            className="habilidades"
            onClick={() => window.open('https://www.canva.com/design/DAGR5Tg7vXA/RBjpvsKFUe2ChrYCtDq7tw/view')}
          >
            Currículo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
