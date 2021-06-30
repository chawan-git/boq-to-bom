import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import boq from "../images/boq.png";
import bom from "../images/bom.png";
import { Link } from 'react-router-dom';


//Author: Ashutosh Rao Chawan U & Suggala Manasvi
export class HomePage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <div className="container-fluid">
          <div className="row mt-4 mb-4">
            <div className="col-5 sky">
              <div className="card sky">
                <div
                  className="card-body d-flex align-items-center justify-content-center"
                  style={{ minHeight: "81vh" }}
                >
                  <img src={boq} alt="" height="0vh" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <Link
                to="/signin"
                className="fw-bold"
              >
                <i className="bi bi-arrow-right-square display-1"></i>
              </Link>
            </div>
            <div className="col-5 sky">
              <div className="card sky">
                <div
                  className="card-body d-flex align-items-center justify-content-center"
                  style={{ minHeight: "81vh" }}
                >
                  <img src={bom} alt="" height="630vh" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default HomePage;
