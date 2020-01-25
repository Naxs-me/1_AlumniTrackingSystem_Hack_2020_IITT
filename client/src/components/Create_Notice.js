import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import NavigationBar from './Navigation_Bar';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
class Create_Notice extends Component {
    constructor(props){
        super(props);

        this.onNoticeNameChange = this.onNoticeNameChange.bind(this);
        this.onNotice_descChange = this.onNotice_descChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.onTypeChange = this.onTypeChange.bind(this);
        this.state = {
            NoticeName: '',
            Notice_desc: ''
            //Type: 'Public'
        }
    }
    onNoticeNameChange(e) {
        this.setState({
            NoticeName: e.target.value
        });
    }

    onNotice_descChange(e) {
        this.setState({
            Notice_desc: e.target.value
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
            NoticeName: this.state.NoticeName,
            Notice_desc: this.state.Notice_desc
            //Type: this.state.Type
        };
        axios.post('http://localhost:4000/Create_Notice/add', newProblem)
            .then(res => console.log(res.data));
        alert("Notice Created Succesfully");
        console.log(`Form submitted:`);
        this.setState({
            NoticeName: '',
            Notice_desc: ''
            //Type: 'Public'
        })
    }

    render() {
            return (
                <div>
                <NavigationBar />
                    <Container className="Login">
                        <Form onSubmit = {this.onSubmit}>
                            <p className="header">Create Notice</p>

                            <Form.Group controlId="formBasicName">
                                <Form.Label className="formBasic">Notice Name</Form.Label>
                                <Form.Control type="text" placeholder="Notice Name" value = {this.state.NoticeName} onChange = {this.onNoticeNameChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label className="formBasic" id = "increaseHeight">Notice Description</Form.Label>
                                <Form.Control as="textarea" rows="6" placeholder="Notice Description" value = {this.state.Notice_desc} onChange = {this.onNotice_descChange}  required />
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
                            <Button variant="outline-light" type="submit" id="chb">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            );
    }
}
export default Create_Notice;