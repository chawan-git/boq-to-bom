import React, { Component } from 'react'
import history from '../history';

export class ManagementDashboard extends Component {
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
                
            </>
        )
    }
}

export default ManagementDashboard
