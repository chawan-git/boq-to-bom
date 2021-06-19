import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from "../history";
import logo from "../logo.png";

export class ManagementHeaderComponent extends Component {
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", (e) => this.getData());
  }

  getData = () => {
    if (localStorage.getItem("Management")) {
    } else {
      history.push("/unauthorized");
    }
  };
  render() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-expand-md navbar-light lake">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="AQSA" width="125" height="50" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/management/home"
                      className="nav-link"
                      aria-current="page"
                    >
                        <i className="bi bi-house h5"> </i>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="boqDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    
                      BOQ
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="boqDropdown">
                      <li>
                        <Link
                          to="/management/createboq"
                          className="dropdown-item"
                        >
                          Create BOQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewboq"
                          className="dropdown-item"
                        >
                          View BOQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/management/viewbom"
                      className="nav-link"
                      aria-current="page"
                    >
                      
                      View BOM
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="unitDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Unit
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="unitDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createunit"
                          className="dropdown-item"
                        >
                          Create Unit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewunit"
                          className="dropdown-item"
                        >
                          View Unit
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="itemDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Item
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="itemDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createitem"
                          className="dropdown-item"
                        >
                          Create Item
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewitem"
                          className="dropdown-item"
                        >
                          View Item
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="subWorkDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sub Work
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="subWorkDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createsubwork"
                          className="dropdown-item"
                        >
                          Create Sub Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewsubwork"
                          className="dropdown-item"
                        >
                          View Sub Work
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="workDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Work
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="workDropdown"
                    >
                      <li>
                        <Link
                          to="/management/creatework"
                          className="dropdown-item"
                        >
                          Create Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewwork"
                          className="dropdown-item"
                        >
                          View Work
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="machineDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Machine
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="machineDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createmachine"
                          className="dropdown-item"
                        >
                          Create Machine
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewmachine"
                          className="dropdown-item"
                        >
                          View Machine
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="departmentDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Department
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="departmentDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createdepartment"
                          className="dropdown-item"
                        >
                          Create Department
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewdepartment"
                          className="dropdown-item"
                        >
                          View Department
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="gstDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      GST
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="gstDropdown">
                      <li>
                        <Link
                          to="/management/creategst"
                          className="dropdown-item"
                        >
                          Create GST
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewgst"
                          className="dropdown-item"
                        >
                          View GST
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="contactDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Contact
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="contactDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createcontact"
                          className="dropdown-item"
                        >
                          Create Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewcontact"
                          className="dropdown-item"
                        >
                          View Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="vendorDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Vendor
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="vendorDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createvendor"
                          className="dropdown-item"
                        >
                          Create Vendor
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewvendor"
                          className="dropdown-item"
                        >
                          View Vendor
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="templateDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Template
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="templateDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createtemplate"
                          className="dropdown-item"
                        >
                          Create Template
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewtemplate"
                          className="dropdown-item"
                        >
                          View Template
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/management/home"
                      className="nav-link dropdown-toggle"
                      id="templateDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Users
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="templateDropdown"
                    >
                      <li>
                        <Link
                          to="/management/createuser"
                          className="dropdown-item"
                        >
                          Create User
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/management/viewuser"
                          className="dropdown-item"
                        >
                          View User
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                <Link to="/management/home"
                  className="nav-link dropdown-toggle"
                  href="/management/home"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle h5"></i> <span className="mb-4">Account</span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <Link to="/management/profile" className="dropdown-item">
                      Profile Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signout"
                      className="dropdown-item"
                      href="/signout"
                    //   onClick={this.handleLogout}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default ManagementHeaderComponent;
