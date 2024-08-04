import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Header title="React"/>
      </header>
    </div>
  );
}

function Header({title}){
  return (
    <h1>{title}</h1>
  )

}


export default App;
// export default Heading;

