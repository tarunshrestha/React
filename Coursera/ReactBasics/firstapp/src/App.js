import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
        
  //       <Header title="React"/>
  //     </header>
  //   </div>
  // );

  //   return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello there"));

  // The way this works is described in React docs using the following code:
  // React.createElement(
  // type,
  // [props],
  // [...children]
  // )
  return React.createElement(
   "div",
    {Header},
      React.createElement("h1", {Header}, "Hello there")
   );
  
}

function Header({title}){
  return (
    <h1>{title}</h1>
  )

}


export default App;
// export default Heading;

