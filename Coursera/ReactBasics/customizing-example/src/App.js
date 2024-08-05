import './App.css';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Add a={100} b={150} />
        <Promo/>
        <Intro1 />
        <Intro2 />
        <Intro3/>
        <Footer/>
      </header>
    </div>
  );
}

function Add({a, b}){
  let value = a + b
  return (<>
  <h1>{value}</h1>
  </>)
}

export default App;
