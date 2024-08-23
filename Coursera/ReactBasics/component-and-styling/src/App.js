import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import avatar from './avatar.png'
import Card from './components/Card';

function Logo(){
    const userPic = <img src={avatar} alt="logo" />
    return userPic
}

function App() {
  const user = {
    name: "Tarun",
    type: "Main",
  } 
  return (
    <>
      < Header user={user} />
      <Logo />
      < Sidebar type={user.type} />
      < Main />
      <Card  h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />


    </>
  );
}

export default App;
