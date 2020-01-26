import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Status: JSON.parse(localStorage.getItem("Name"))
        }
    }

    render() {
        return (
            <div className="backblur">
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className = "alignend">
                            <Button onClick={this.props.closePopup} variant="outline-light" type="submit" className="buttonend">X</Button>
                        </div>
                        <div className="popup_header">
                            <h3>{`${this.state.Status["name"]}`}</h3>
                            <br/>
                        </div>
                        <br/>
                        <div>
                            <p>
                                College Name: {`${this.state.Status["collegeName"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Department: {`${this.state.Status["dept"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Passout(Year): {`${this.state.Status["passout"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Degree: {`${this.state.Status["degree"]}`}
                            </p>
                        </div>
                        <br/>
                        <div>
                            <p>
                                Email: {`${this.state.Status["email"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Contact Number: {`${this.state.Status["contactNo"]}`}
                            </p>
                        </div>
                        <div className="popup_header"></div>
                        <br/>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;