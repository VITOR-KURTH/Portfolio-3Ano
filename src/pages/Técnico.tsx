import { Link } from 'react-router-dom';
import './CssPages/Técnico.css';
import CodeSpaces from '../Components/CodeSpace/CodeSpaces';

const Tecnico = () => {
  return (
    <div className="container">
      <div className="background-image"></div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/areas">Áreas</Link>
        <Link to="/tecnico">Técnico</Link>
        <Link to="/ppe">PPE</Link>
        <div id="indicator"></div>
      </nav>
      <div className='TituloTec'>Áreas Técnico</div>
      <CodeSpaces/>
     </div>
    
  );
};

export default Tecnico;
