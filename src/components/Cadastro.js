import { useState, useEffect } from "react";

function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "Pagar conta de luz",
        "Estudar programação",
        "Enviar a tarefa"
    ]);
    const [pessoas, setPessoas] = useState([]);
    const [corFundo, setCorFundo] = useState('#ffffff')

    const tarefasStorage = localStorage.getItem('@tarefa)');
    

    useEffect(() =>{
        const nomeStorage = localStorage.getItem('@pessoa')
        if(!nomeStorage){
           const nomeUsuario = prompt('Qual o seu nome?');
           if(nomeUsuario) {
            setPessoas(nomeUsuario);
            localStorage.setItem('@pessoa', nomeUsuario);
           }
        } else {
            setPessoas(nomeStorage);
        }

        const tarefasStorage = localStorage.getItem('@tarefa');
        if(tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

        const corStorage = localStorage.getItem('@corFundo');
        if(corStorage) {
            setCorFundo(corStorage);
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    useEffect(() => {
        localStorage.setItem('@corFundo', corFundo);
    }, [corFundo]);


    function handleRegistro(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    };

    function handleCorFundo(e) {
        setCorFundo(e.target.value);
    }

    return (
        <div style={{ backgroundColor: corFundo, minHeight: '100vh', padding: '20px' }}>
          <h1>{pessoas}, sua lista de tarefas</h1>
          <form onSubmit={handleRegistro}>
            <input 
              type="text" 
              placeholder="Digite uma tarefa"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={index}>{tarefa}</li>
            ))}
          </ul>
          <div>
            <h2>Escolha uma cor de fundo:</h2>
            <label>
              <input type="radio" name="cor" value="#ffffff" onChange={handleCorFundo} checked={corFundo === '#ffffff'} /> Branco
            </label>
            <label>
              <input type="radio" name="cor" value="#ffcccb" onChange={handleCorFundo} checked={corFundo === '#ffcccb'} /> Vermelho Claro
            </label>
            <label>
              <input type="radio" name="cor" value="#add8e6" onChange={handleCorFundo} checked={corFundo === '#add8e6'} /> Azul Claro
            </label>
            <label>
              <input type="radio" name="cor" value="#90ee90" onChange={handleCorFundo} checked={corFundo === '#90ee90'} /> Verde Claro
            </label>
          </div>
        </div>
      );
    }
    

export default Cadastro;
