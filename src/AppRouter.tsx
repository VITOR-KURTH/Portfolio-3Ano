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
        <Route path="/linguagens" element={<Linguagens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;