import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  const user = {
    name: "Tarun",
    type: "Main"
  } 
  return (
    <>
      < Header user={user} />
      < Sidebar type={user.type} />
      < Main />

    </>
  );
}

export default App;
