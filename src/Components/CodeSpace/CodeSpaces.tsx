import './CodeSpaces.css';

const CodeSpaces = () => {
    const goToPage = (url: string) => {
        window.location.href = url;
    };

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
                        <div className="text">
                            <span className="keyword">CREATE TABLE</span> <span className="type">usuarios</span> (
                            <span className="variable">id</span> <span className="type">INT</span> <span className="keyword">PRIMARY KEY</span>, 
                            <span className="variable">nome</span> <span className="type">VARCHAR(100)</span>);
                        </div>
                        <button className="navigate-button" onClick={() => goToPage('/Banco')}>
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
                        <div className="text">
                            {'{ '}
                            <span className="string">"host"</span>: <span className="string">"localhost"</span>, 
                            <span className="string">"port"</span>: <span className="type">3000</span>
                            {' }'}
                        </div>
                        <button className="navigate-button" onClick={() => goToPage('/Implantação')}>
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
                        <div className="text">
                            <span className="function">app.get</span>('
                            <span className="string">/</span>', (<span className="variable">req</span>, <span className="variable">res</span>) 
                            ={'>'} <span className="variable">res</span>.<span className="function">send</span>(
                            <span className="string">'Olá, mundo!'</span>));
                        </div>
                        <button className="navigate-button" onClick={() => goToPage('/Desenvolvimento')}>
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
                        <div className="text">
                            <span className="keyword">Classe</span> <span className="type">Usuario</span>: 
                            <span className="variable">id</span>, <span className="variable">nome</span>; 
                            <span className="keyword">Métodos</span>: <span className="function">cadastrar()</span>, 
                            <span className="function">autenticar()</span>;
                        </div>
                        <button className="navigate-button" onClick={() => goToPage('/Modelagem')}>
                            Ir para Modelagem de Sistemas
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
                        <div className="terminal-title">App.js</div>
                    </div>
                    <div className="contentCode">
                    <div className="text">
    <span className="function">app.get</span>(<span className="string">"/"</span>, (<span className="variable">req</span>, <span className="variable">res</span>) 
    ={`>`} <span className="variable">res</span>.<span className="function">send</span>(<span className="string">"Olá, mundo!"</span>));
</div>

                        <button className="navigate-button" onClick={() => goToPage('/Aplicativos')}>
                            Ir para Programação de aplicativos
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
                        <div className="terminal-title">AppTest.js</div>
                    </div>
                    <div className="contentCode">
                    <div className="text">
    <span className="keyword">it</span>(<span className="string">"deve retornar status 200"</span>, () ={`>`} {'{'}
        <br />
        &nbsp;&nbsp;&nbsp;<span className="keyword">expect</span>(<span className="variable">response.status</span>).<span className="function">toBe</span>(200);
    {'}'});
</div>
                        <button className="navigate-button" onClick={() => goToPage('/Testes')}>
                            Ir para Testes de Sistemas
                        </button>
                    </div>
                </div>
     

            </div>
        </div>
    );
};

export default CodeSpaces;
