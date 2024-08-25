import React from 'react';
import { Link } from 'react-router-dom';
import './CssPages/Áreas.css';


interface Card {
  title: string;
  copy: string;
  button: string;
  path: string;
}

const cards: Card[] = [
  { title: 'Ciências', copy: 'Atividades de ciências da natureza realizadas ao longo dos trimestres', button: 'Entrar', path: '/ciencias' },
  { title: 'Matemática', copy: 'Atividades de matemática e suas tecnologias realizadas ao longo dos trimestres', button: 'Entrar', path: '/matematica' },
  { title: 'Humanas', copy: 'Atividades de ciências humanas realizadas ao longo dos trimestres', button: 'Entrar', path: '/humanas' },
  { title: 'Linguagens', copy: 'Atividades de linguagens e suas tecnologias realizadas ao longo dos trimestres', button: 'Entrar', path: '/linguagens' }
];

function card(title: string, copy: string, button: string, path: string) {
  
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <Link to={path}>
          <button className="btn">{button}</button>
        </Link>
      </div>
    </div>
  );
}

const Areas = () => {
  return (
    
    <div className="container">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/areas">Áreas</Link>
        <Link to="/tecnico">Técnico</Link>
        <Link to="/ppe">PPE</Link>
        <div id="indicator"></div>
      </nav>
      <h1 className='titulo'>Áreas do conhecimento</h1>
      <main className="page-content">
        {cards.map((cardItem) => card(cardItem.title, cardItem.copy, cardItem.button, cardItem.path))}
      </main>
    </div>
  );
};

export default Areas;