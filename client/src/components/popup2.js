import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.onLike = this.onLike.bind(this);
        this.state = {
            Event: JSON.parse(localStorage.getItem("Name"))
        }
        //console.log("Popup Problem");
       // console.log(this.state.Problem);
    }

    onLike(e){
        e.preventDefault();
        console.log("like");
        axios.post('http://localhost:4000/like', {id:this.state.Event["_id"]})
      .then(res => {
        console.log("printf");
        console.log(res.data);
        this.setState({Event: res.data});
        localStorage.setItem("Name",JSON.stringify(res.data));
        console.log(toString(localStorage.getItem("userData")));
    });}

    render() {
        return (
            <div className="backblur">
                <div className='popup'>
                    <div className='popup\_inner'>
                        <div className = "alignend">
                            <Button onClick={this.props.closePopup} variant="outline-light" type="submit" className="buttonend">X</Button>
                        </div>
                        <div className="popup_header">
                            <h3>{`${this.state.Event["collegeName"]}`}</h3>
                            <br/>
                        </div>
                        <br/>
                        <div>
                            <p>
                                Registration number:{`${this.state.Event["collegeNo"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                Address: {`${this.state.Event["address"]}`}
                            </p>
                        </div>
                        <div>
                            <p>
                                ContactNo: {`${this.state.Event["contactNo"]}`}
                            </p>
                        </div>
                        <Button variant="outline-light" type="submit" id="chb" > Join</Button>
                        <div className="popup_header"></div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;