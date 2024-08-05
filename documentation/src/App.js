import { useState } from 'react'
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
        <br />
        <CountButton/>


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

function CountButton(){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <button onClick={handleClick}> Clicked {count} times </button>
    <button onClick={handleClick}> Clicked {count} times </button>
    </>

  );
}

export default App;
