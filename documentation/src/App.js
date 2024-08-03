import logo from './logo.svg';
import './App.css';
import About from "./About.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Welcome to React!!</p> */}


        <About />
        <img src={logo} className="App-logo" alt="logo" />
        <Button />


      </header>
    </div>
  );
}

function Button(){
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default App;
