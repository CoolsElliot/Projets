import React from "react"

class Nav extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 d-flex align-items-center justify-content-around" id="nav">
                        <div className="col-3 col-lg-3 col-xl-3 d-flex align-item-center m-0 fs-6">
                            <h1>Fashe <span>.</span></h1>
                        </div>

                        <nav className="d-flex m-0 col-6 col-lg-6 col-xl-6">
                            <ul className="d-flex list-unstyled" id="menulist">
                                <li className="">
                                    <a href="">Home</a>
                                </li>
                                <li className="">
                                    <a href="">Products</a>
                                </li>
                                <li className="">
                                    <a href="">About</a>
                                </li>
                                <li className="">
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="col-3 col-lg-3 col-xl-3 m-0">
                            <div className="d-flex">
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-heart fs-4"></i>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i class="fa-solid fa-basket-shopping fs-4 "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav 