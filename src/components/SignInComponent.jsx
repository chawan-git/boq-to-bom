import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import logo from "../logo.png";
import { connect } from "react-redux";
import { signInUser } from "../redux";
import history from "../history";
import { Link } from 'react-router-dom';

class SignInComponent extends Component {
  state = {
    loading: false,
    payload: {
      username: "",
      password: "",
    },
    error: "",
  };

  handleChange = async (event) => {
    await this.setState({
      ...this.state,
      payload: {
        ...this.state.payload,
        [event.target.name]: event.target.value,
      }
    })
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.signInUser(this.state.payload);
    if (this.props.userReducer.signIn.user !== "") {
      localStorage.setItem("User",JSON.stringify(this.props.userReducer.signIn.user));
      if(this.props.userReducer.signIn.user.type === "management"){
        localStorage.setItem("Management","Management");
        history.push("/management/home");
      }
      else{
        localStorage.setItem("View","View");
        history.push("/view/home");
      }
    } else {
      await this.setState({
        ...this.state,
        error:
          this.props.userReducer.signIn.error !== ""
            ? "Server Down" : this.props.userReducer.signIn.user === "" ? "Wrong Credentials" 
            : "",
      });
    }
  };

  componentDidMount(){
    if(localStorage.getItem("Management")){
      history.push("/management/home");
    }
    else if(localStorage.getItem("View")){
      history.push("/view/home");
    }
  }
  render() {
    return (
      <>
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
          style={{ minHeight: "97vh" }}
        >
          <div className="card">
            <Link to="/" className="text-center">
            <img src={logo} alt="AQSA" width="250vw" height="125vh" className="img-fluid"/>
            </Link>
            <div className="card-body">
              <h3 className="card-title text-center fw-bold">SIGN IN</h3>
              <hr />
              <form>
                <h3>{this.state.error}</h3>
                <div className="form-group">
                  <label htmlFor="username">
                    <h4>
                      Enter your username<span className="text-danger">*</span>{" "}
                      (required)
                    </h4>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.payload.username}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password">
                    <h4>
                      Enter your password<span className="text-danger">*</span>{" "}
                      (required)
                    </h4>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.payload.password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-success fw-bold col-12"
                  onClick={this.handleSubmit}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = { signInUser };
export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
