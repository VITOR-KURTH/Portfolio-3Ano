import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Areas from './pages/Áreas';
import Tecnico from './pages/Técnico';
import PPE from './pages/PPE';
import Ciencias from './pages/Áreas/Ciencias';
import Matematica from './pages/Áreas/Matematica';
import Humanas from './pages/Áreas/Humanas';
import Linguagens from './pages/Áreas/Linguagens';
import Banco from './Técnico/BancoDeDados/Banco';
import Desenvolvimento from './Técnico/Desenvolvimento/Desenvolvimento';
import Modelagem from './Técnico/Modelagem/Modelagem';
import Implantação from './Técnico/Implantação/Implantação';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/tecnico" element={<Tecnico />} />
        <Route path="/ppe" element={<PPE />} />
        <Route path="/ciencias" element={<Ciencias />} />
        <Route path="/matematica" element={<Matematica />} />
        <Route path="/humanas" element={<Humanas />} />
        <Route path="/Banco" element={<Banco />} />
        <Route path="/Desenvolvimento" element={<Desenvolvimento />} />
        <Route path="/Modelagem" element={<Modelagem />} />
        <Route path="/Implantação" element={<Implantação />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;