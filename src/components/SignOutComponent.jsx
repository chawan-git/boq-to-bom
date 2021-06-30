import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import history from '../history'

export class SignOutComponent extends Component {
    componentDidMount() {

        // Calling the localStorage.clear method will clear all the data stored in the localStorage making the logins invalid.
        localStorage.clear();
    
        // Setting the timeout function to redirect to the home screen after 5 seconds.
        setTimeout(function () {
          history.push("/");
        }, 3000);
      }
    render() {
        return (
            <>
                 <HeaderComponent />
                <div
          className="container-fluid d-flex justify-content-center align-items-center"
          style={{ minHeight: "87vh" }}
        >
          <div className="card">
            <Link to="/" className="text-center">
            <img src={logo} alt="AQSA" width="250vw" height="125vh" className="img-fluid"/>
            </Link>
            <div className="card-body">
              <h3 className="card-title text-center fw-bold">Signed Out!</h3>
              <hr />
              <h4>Redirecting you to home page in 3 seconds!</h4>
             </div>
          </div>
        </div>
                <FooterComponent />
            </>
        )
    }
}

export default SignOutComponent
