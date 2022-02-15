import React from "react"
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Contact from "./Contact"

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <Home />
        </div>
        <div className="row">
          <About />
        </div>
      </div>
    );
    }
  }
  

export default App;
