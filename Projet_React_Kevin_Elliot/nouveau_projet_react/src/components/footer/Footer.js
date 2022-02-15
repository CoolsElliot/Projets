import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>


                <div className="col-lg-12">
                    <div className="col-lg-6">
                        <h3>GET IN TOUCH</h3>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York,</p>
                        <p>NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className="row">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                            <a href=""><i class="fa-brands fa-snapchat"></i></a>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-6">
                            <h3>LINKS</h3>
                            <a href="">Search</a>
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                            <a href="">Returns</a>
                        </div>
                        <div className="col-lg-6">
                            <h3>LINKS</h3>
                            <a href="">Search</a>
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                            <a href="">Returns</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">

                    </div>
                    <div className="row">
                        <p>Copyright &copy All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer