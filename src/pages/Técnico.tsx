import { Link } from 'react-router-dom';


const Tecnico = () => {
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
    </div>
  );
};

export default Tecnico;