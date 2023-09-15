import React from "react";

function Footer() {
    return (
        <footer className="footer"
        style={{background:"#212121", borderTop: "1px solid white"}}>
            <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">
                        © 2023-2024
                    </small>
                </div>
                <div className="col-6 col-md text-white">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <text className="text-muted" >
                                Cool stuff
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Random feature
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Team feature
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Stuff for developers
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Another one
                            </text>
                        </li>
                        <li>
                            <text className="text-muted">
                                Last time
                            </text>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md text-white">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <text className="text-muted" >
                                Resource
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Resource name
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Another resource
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Final resource
                            </text>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md text-white">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <text className="text-muted" >
                                Business
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Education
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Government
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Gaming
                            </text>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md text-white">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <text className="text-muted" >
                                Team
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Locations
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Privacy
                            </text>
                        </li>
                        <li>
                            <text className="text-muted" >
                                Terms
                            </text>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
