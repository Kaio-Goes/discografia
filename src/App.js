
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de Música</h1>
      <div className="containerInput">
        <input  
        type="text"
        placeholder="Digite uma palavra chave"
        />

        <button className="buttonSearch"> 
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default App;
