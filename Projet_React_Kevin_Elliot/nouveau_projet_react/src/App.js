import React from "react"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Product from "./components/Product/Product"
import Contact from "./components/Contact/Contact"

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <Home />
        </div>
        <div className="row">
          <Product />
        </div>
        <div className="row">
          <About />
        </div>
        <div className="row">
          <Contact />
        </div>
      </div>
    );
    }
  }
  

export default App;
