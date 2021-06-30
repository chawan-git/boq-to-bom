import React, { Component } from 'react'

export class FooterComponent extends Component {
    render() {
        return (
            <>
                <footer className="lake" style={{ left: 0, bottom: 0, width: '100%'}}>
                    <div className="container-fluid text-center">
                        <span className="text-muted fw-bold">&copy; 2021 Aqsa Air Conditioner's Private Limited. All Rights Reserved. Application designed, developed &#38; maintained by Ashutosh Rao Chawan &#38; Suggala Manasvi.</span>
                    </div>
                </footer>
            </>
        )
    }
}

export default FooterComponent
