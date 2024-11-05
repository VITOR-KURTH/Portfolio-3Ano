import { Link } from 'react-router-dom';
import './CssPages/Técnico.css';
import CodeSpaces from '../Components/CodeSpace/CodeSpaces';
import Navbar from '../Components/Navbar/Navbar';

const Tecnico = () => {
  return (
    <div className="container">
      <div className="background-image"></div>
    <Navbar/>
      <div className='TituloTec'>Áreas Técnico</div>
      <CodeSpaces/>
     </div>
    
  );
};

export default Tecnico;
