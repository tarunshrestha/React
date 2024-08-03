import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          React
        </p>
        <Header/>
      </header>
    </div>
  );
}

function Header(){
  let title = "This is some heading text."
  return (
    <h1>{title}</h1>
  )

}


export default App;
// export default Heading;

