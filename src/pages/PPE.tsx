import { Link } from 'react-router-dom';
import './CssPages/PPE.css'
import Navbar from '../Components/Navbar/Navbar';
import Certificado from '../pages/imagensPages/certificadoMec.pdf'

const PPE = () => {
  return (
  
    <div className="container">
     
     <Navbar/>
     <div className="cardAtividade">
     <h2 className="tituloAtividade">Certificado MEC</h2>

          <embed className="FileAtividade" src={Certificado}  style={{width: '100%', height:'80%'}}/>
            
          
            <button className="abrirAtividade" onClick={() => window.open(Certificado)}>Certificado</button>
          </div>
      </div>
   
  );
};

export default PPE;