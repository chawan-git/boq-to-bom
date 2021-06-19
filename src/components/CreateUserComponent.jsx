import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import { insertUser,findAllUsers } from "../redux";

class CreateUserComponent extends Component {
  state={
    loading: false,
    payload: {
      employee_id: "",
      name: "",
      username: "",
      password: "",
      emailId: "",
      type: "management",
      del: 0
    },
    error: "",
  };

  handleChange = async (event) => {
    console.log(event.target.value);
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
    //  this.props.userReducer.findAllUsers.users.every(async(element) => {
    //    if(element.username === this.state.payload.username){
    //     await this.setState({
    //       ...this.state,
    //       error: "Username already exists",
    //     });
    //     return false;
    //   };
    //   return true;
    // });
    for(let i=0; i<this.props.userReducer.findAllUsers.users.length;i++){
      if(this.props.userReducer.findAllUsers.users[i].username === this.state.username){
        await this.setState({
          ...this.state,
          error: "Username already exists",
        });
        break;
      }
    }
    console.log(this.state)
    if(this.state.error === ""){
    await this.props.insertUser(this.state.payload);
    if (this.props.userReducer.insertUser.user === "") {
      await this.setState({
        ...this.state,
        error:
          this.props.userReducer.insertUser.error !== ""
            ? "Server Down" : "",
      });
    } 
    else {
      history.push("/management/viewuser");
    }
  }
  };

  async componentDidMount() {
    await this.props.findAllUsers();

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
        <div className="container">
          <br />
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-bold">Create a New User</h3>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-bold">{this.state.error}</h3>
            </div>
          </div>
          <br />
          <form>
            <div className="row">
              <div className="col-2">
                <label htmlFor="employee_id">
                  Employee ID <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="employee_id"
                  id="employee_id"
                  value={this.state.payload.employee_id}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label htmlFor="name">
                  Employee Name <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="name"
                  id="employee_name"
                  value={this.state.payload.name}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-2">
                <label htmlFor="username">
                  Username <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.payload.username}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label htmlFor="password">
                  Password <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.payload.password}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-2">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <input
                  type="email"
                  name="emailId"
                  id="email"
                  value={this.state.payload.emailId}
                  onChange={this.handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label htmlFor="access">
                  Access <span className="text-danger">*</span>
                </label>
              </div>
              <div className="col-4">
                <select name="type" id="access" className="form-control" value={this.state.payload.type}
                  onChange={this.handleChange}>
                  <option value="management">Full Access</option>
                  <option value="view">Only Viewing Access</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-3 offset-3">
                <button
                  type="submit"
                  className="btn btn-success col-12 fw-bold"
                  onClick={this.handleSubmit}

                >
                  Add User
                </button>
              </div>
              <div className="col-3 ">
                <button type="reset" className="btn btn-primary col-12 fw-bold">
                  Reset
                </button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = { insertUser, findAllUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserComponent);
