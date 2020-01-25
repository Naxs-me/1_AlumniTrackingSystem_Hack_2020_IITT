import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';
import NavigationBar from './Navigation_Bar';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
class Create_Event extends Component {
    constructor(props){
        super(props);

        this.onEventNameChange = this.onEventNameChange.bind(this);
        this.onEvent_descChange = this.onEvent_descChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        //this.onTypeChange = this.onTypeChange.bind(this);
        this.state = {
            User_name: '',
            EventName: '',
            Event_desc: '',
            Location: '',
            Contact: '',
            Date: '',
            Time: ''
            //Type: 'Public'
        }
    }
    onEventNameChange(e) {
        this.setState({
            EventName: e.target.value
        });
    }

    onEvent_descChange(e) {
        this.setState({
            Event_desc: e.target.value
        });
    }

    onLocationChange(e) {
        this.setState({
            Location: e.target.value
        });
    }

    onContactChange(e) {
        this.setState({
            Contact: e.target.value
        });
    }

    onDateChange(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onTimeChange(e) {
        this.setState({
            Time: e.target.value
        });
    }

    // onTypeChange(e) {
    //     this.setState({
    //         Type: e.target.value
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();
        console.log("here :: ");
        const newProblem = {
            Name: localStorage.getItem("userName"),
            EventName: this.state.EventName,
            Event_desc: this.state.Event_desc,
            Location: this.state.Location,
            Contact: this.state.Contact,
            Date: this.state.Date,
            Time: this.state.Time
            //Type: this.state.Type
        };
        axios.post('http://localhost:4000/createEvent/add', newProblem)
            .then(res => console.log(res.data));
        alert("Event Created Succesfully");
        console.log(`Form submitted:`);
        console.log(`Problem: ${this.state.EventName}`);
        console.log(`Address: ${this.state.Location}`);
        console.log(`Contact: ${this.state.Contact}`);
        this.setState({
            EventName: '',
            Event_desc: '',
            Loaction: '',
            Contact: '',
            Date: '',
            Time: ''
            //Type: 'Public'
        })
    }

    render() {
        console.log("Hi");
        return (
            <div>
            <NavigationBar />
            <div>
                <Container className="Login">
                    <Form onSubmit = {this.onSubmit}>
                        <p className="header">Create Event</p>

                        <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic">Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Event Name" value = {this.state.EventName} onChange = {this.onEventNameChange} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic" id = "increaseHeight">Event Description</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Event Description" value = {this.state.Event_desc} onChange = {this.onEvent_descChange}  required  />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="formBasic">Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" value = {this.state.Location} onChange = {this.onLocationChange} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="formBasic">Contact Number</Form.Label>
                            <Form.Control type="number" placeholder="Contact Number" value = {this.state.Contact} onChange = {this.onContactChange} required />
                        </Form.Group>
                    {/*    <p className="formBasic">Privacy Type : </p>
                        <p className="formBasic1">
                        <Form.Group controlId="formBasicGender">
                            <Form.Label id="try">Private  </Form.Label>
                            <input type="radio" required name="Type" value="Private" checked={this.state.Type === "Private"} onChange={this.onTypeChange} />
                            <Form.Label id="try">Public  </Form.Label>
                            <input type="radio" required name="Type" value="Public" checked={this.state.Type === "Public"} onChange={this.onTypeChange} />
                        </Form.Group>
                    </p> */}
                    <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic">Date</Form.Label>
                            <Form.Control type="text" placeholder="Date" value = {this.state.Date} onChange = {this.onDateChange} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic">Time</Form.Label>
                            <Form.Control type="text" placeholder="Time" value = {this.state.Time} onChange = {this.onTimeChange} required />
                        </Form.Group>
                        <Button variant="outline-light" type="submit" id="chb">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            </div>
        );
    }
}
export default Create_Event;