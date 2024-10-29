import { useNavigate } from 'react-router-dom';
import './CodeSpaces.css';

const CodeSpaces = () => {
    const navigate = useNavigate();

    const goToBancoDeDados = () => navigate('/atividades-banco-dados');
    const goToImplantacaoManutencao = () => navigate('/atividades-implantacao-manutencao');
    const goToDesenvolvimentoSistemas = () => navigate('/atividades-desenvolvimento-sistemas');
    const goToModelagemSistemas = () => navigate('/atividades-modelagem-sistemas');

    return (
        <div className="codespaces-container">
        <div className="row">
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                    <div className="terminal-title">Banco.sql</div>
                </div>
                <div className="contentCode">
                    <div className="text">CREATE TABLE usuarios (id INT PRIMARY KEY, nome VARCHAR(100));</div>
                    <button className="navigate-button" onClick={goToBancoDeDados}>
                        Ir para Banco de Dados
                    </button>
                </div>
            </div>
    
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                    <div className="terminal-title">Manutenção.config</div>
                </div>
                <div className="contentCode">
                    <div className="text">{`{ "host": "localhost", "port": 3000 }`}</div>
                    <button className="navigate-button" onClick={goToImplantacaoManutencao}>
                        Ir para Implantação e Manutenção
                    </button>
                </div>
            </div>
        </div>
    
        <div className="row">
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                    <div className="terminal-title">Desenvolvimento.tsx</div>
                </div>
                <div className="contentCode">
                    <div className="text">{`app.get('/', (req, res) => res.send('Olá, mundo!'));`}</div>
                    <button className="navigate-button" onClick={goToDesenvolvimentoSistemas}>
                        Ir para Desenvolvimento de Sistemas
                    </button>
                </div>
            </div>
    
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                    <div className="terminal-title">Modelagem.uml</div>
                </div>
                <div className="contentCode">
                    <div className="text">Classe Usuario: id, nome; Métodos: cadastrar(), autenticar();</div>
                    <button className="navigate-button" onClick={goToModelagemSistemas}>
                        Ir para Modelagem de Sistemas
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default CodeSpaces;
