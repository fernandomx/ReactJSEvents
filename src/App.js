//EVENTS

const App = () => {
  const name = "Click Midia Digital";

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const showEvent = (e, myName) => {
    console.log("Evento clicado");
    console.log(e);
    alert(myName);
  };

  const Button = (
    <button onClick={(x) => showEvent(x, "Fernando")}> Mostrar evento </button>
  );
  return (
    <div>
      <p>Click Midia Digital</p>
      <p>Bem vindos Pessoal!</p>
      <input onChange={handleChange} />
      {Button}
    </div>
  );
};

export default App;
