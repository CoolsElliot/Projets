import React from "react"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Product from "./components/Product/Product"
import Contact from "./components/Contact/Contact"
import Footer from "./components/footer/Footer"
import Nav from "./components/Nav/Nav"

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <Nav />
        </div>
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
        <div className="row">
          <Footer />
        </div>
      </div>
    );
    }
  }
  

export default App;
