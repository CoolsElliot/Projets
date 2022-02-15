import React from "react"

class Nav extends React.Component {
    render(){
        return(
            <div className="col-lg-12" id="nav">
                <div className="col-lg-3 fs-10">
                    <h1>Fashe <span className="fs-12 text-danger">.</span></h1>
                </div>
                
                <nav className="d-flex col-lg-6">
                    <ul className="d-flex justify-content-around">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="col-lg-3">
                    <div className="d-flex">
                        <div className="">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav 