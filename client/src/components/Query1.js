import React from 'react';
import '../App.css';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
// import { RadioGroup, RadioButton } from 'react-radio-buttons';
import axios from 'axios';
import Popup from './popup';
import NavigationBar from './Navigation_Bar';
import { Button } from 'react-bootstrap';

class Query1 extends Component {
    constructor(props) {
        super(props);
        this.onQueryChange = this.onQueryChange.bind(this);
        this.onCriteriaChange = this.onCriteriaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log("Constructor reached");
        // this.togglePopup = this.togglePopup.bind(this)
        // this.setState({ gotData: false });
        this.state = {
            search_name: '',
            criteria: '',
            pageTable: []
        };

    }
    onQueryChange(e) {
        this.setState({
            search_name: e.target.value
        });
        console.log(e.currentTarget.value);
    }
    onCriteriaChange(e) {
        this.setState({
            criteria: e.currentTarget.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const newQuery = {
            search_name: this.state.search_name,
            criteria: this.state.criteria
        };
        console.log(newQuery);
            axios.post('http://localhost:4000/Search/add', newQuery)
            .then(res => {
                console.log("REACHED HERE..");
                console.log(res.data);
                this.setState({ pageTable: res.data });
                var visited = [];
                for (var i = 0; i < this.state.pageTable.length; i++) {
                    visited.push(0);
                }

            });
        console.log('query submitted ..!! and retrieved');

        this.setState({
            search_name: '',
            criteria: ''
        })
    }
    render() {
        console.log("reached render");
        return (

            <div>

<Container className="Login">
                    <Form onSubmit={this.onSubmit}>
                        <p className="header">Search</p>

                        <Form.Group controlId="formBasicName">
                            <Form.Label className="formBasic">Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={this.state.search_name} onChange={this.onQueryChange} required />
                        </Form.Group>
                        <p className="formBasic">Criteria : </p>
                        <p className="formBasic1">
                            <Form.Group controlId="formBasicGender">
                                <Form.Label id="try">Year  </Form.Label>
                                <input type="radio" required name="Gender" value="Year" checked={this.state.criteria === "Year"} onChange={this.onCriteriaChange} />
                                <Form.Label id="try">Department  </Form.Label>
                                <input type="radio" required name="Gender" value="Department" checked={this.state.criteria === "Department"} onChange={this.onCriteriaChange} />
                                <Form.Label id="try">College  </Form.Label>
                                <input type="radio" required name="Gender" value="College" checked={this.state.criteria === "College"} onChange={this.onCriteriaChange} />
                            </Form.Group>
                        </p>
                       

                        
                        <Button variant="outline-light" type="submit" id="chb">
                            Search
                        </Button>
                    </Form>
                </Container>

            </div>

        )
    }
}

export default Query1;