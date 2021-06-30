import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import history from "../history";
import { findAllUsers, deleteUser } from "../redux";
import { Link } from 'react-router-dom';

class ViewUserComponent extends Component {
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

  async deleteUser(id, e) {
    e.preventDefault();

    await this.props.deleteUser(id);

    await this.setState({
      ...this.state,
      adminData: this.props.userReducer.findAllUsers.users.filter(
        (user) => user.id !== id
      ),
    });
  }


  render() {
    return (
      <>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-bold">List of Users</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="fw-bold ">
                <i>
                  {this.props.userReducer.findAllUsers.users.length === 0
                    ? "No data found!"
                    : ""}
                </i>
              </h4>
            </div>
          </div>
          <br />
          <div className="table-wrap row">
            <div
              className="table-responsive col-12"
              style={{ width: "100%", height: "75vh" }}
            >
              <table className="table table-hover table-bordered">
                <thead className="fw-bold">
                  <tr>
                    <td>Employee ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Email ID</td>
                    <td>Type</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {this.props &&
                    this.props.userReducer &&
                    this.props.userReducer.findAllUsers &&
                    this.props.userReducer.findAllUsers.users &&
                    this.props.userReducer.findAllUsers.users.map((user) => (
                      <Fragment key={user.id}>
                        <tr key={user.id}>
                          <td>{user.employee_id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.password}</td>
                          <td>{user.emailId}</td>
                          <td>{user.type}</td>
                          <td><button className="btn btn-primary"><Link to={"/management/edituser/"+user.id}><h6 className="text-white"><i className="bi bi-pencil-square">Edit</i></h6></Link></button>&nbsp;
                          <button className="btn btn-danger" onClick={(e) => this.deleteUser(user.id, e)}><h6 className="text-white"><i className="bi bi-trash">Delete</i></h6></button>                          
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
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

const mapDispatchToProps = { findAllUsers, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserComponent);
