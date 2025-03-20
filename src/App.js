import { useState } from "react";
import Nome from "./components/Nome";

function App() {
  const [aluno, setAluno] = useState('Aluno')

  function handleChangeName(nome){
    setAluno(nome)
  }
  return (
    <div className="App">
      <h1>Bem vindo ao meu projeto</h1>
      <h2>Olá {aluno}</h2>
      <button onClick={ () => handleChangeName('Gustavo Rodrigues')}>
        Mudar nome
      </button>
    </div>
  );
}

export default App;


