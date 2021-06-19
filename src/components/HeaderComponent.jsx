import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.png";

export class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-light lake">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand text-center">
                                <img src={logo} alt="AQSA" width="125" height="50"/>
                            </Link>
                            {/* <button type="button" className="btn btn-primary">
                                <Link to="/signin" className="text-decoration-none text-white fw-bold">
                                    <i className="bi bi-box-arrow-in-right"></i> Sign In
                                </Link>
                            </button> */}
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default HeaderComponent
