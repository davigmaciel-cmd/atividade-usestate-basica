import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  function aumentar() {
    setContador(contador + 1)
  }

  return (
    <>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );

}

function Avisar() {

  const [visivel, setVisivel] = useState(false);

    function alternar() {
      setVisivel(!visivel);
    }
  
   return (
  <>
    <button onClick={alternar}>Alternar aviso</button>
    {visivel && <p>este é o aviso! Click aqui para esconder.</p>}
  </>
   )
}

function Saudacao({ nome }) {
  return <p>Seja bem vindo {nome} !</p>;
}


function Nome(){
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState("");
  const [visivel02, setVisivel02] = useState("");

  function aoPressionar(evento){
    if(evento.key === "Enter"){
        setConfirmado(nome);
    }
  }

  return(
  <>
    <input
    value={nome}
    onChange={(evento) => setNome(evento.target.value)}
    onKeyDown={aoPressionar}
    placeholder="Digite seu nome"
    />
    {confirmado && <Saudacao nome={confirmado} />}

    <div>
      <button onClick={()=> setVisivel02(!visivel02)}>
        mostrar saudação
      </button>

      {visivel02 && <p>seja bem vindo {nome}</p>}

    </div>
  </>
  )
}

export default function App() {
  return(
  <>
    <Contador/>
    <Avisar/>
    <Nome/>
  </>
  )
}