import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import './../App.css';

export default class Register extends Component {
    constructor(props) {
        console.log("Comming Here\n");
        super(props);
        this.onTypeChangeTo1 = this.onTypeChangeTo1.bind(this);
        this.onTypeChangeTo2 = this.onTypeChangeTo2.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCollegeNameChange = this.onCollegeNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPassword1Change = this.onPassword1Change.bind(this);
        this.onPassword2Change = this.onPassword2Change.bind(this);
        this.onContactChange = this.onContactChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onCollegeNoChange = this.onCollegeNoChange.bind(this);
        this.onPassoutChange = this.onPassoutChange.bind(this);
        this.onDeptChange = this.onDeptChange.bind(this);
        this.onDegreeChange = this.onDegreeChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: '1',
            name: '',
            collegeName: '',
            email: '',
            password1: '',
            password2: '',
            contact: '',
            address: '',
            collegeNo: '',
            passout: '',
            dept: '',
            gender: '',
            degree: '',
            redirect: false

        }
    }

    onTypeChangeTo1(e) {
        this.setState({
            type: "1"
        });
    }

    onTypeChangeTo2(e) {
        this.setState({
            type: "2"
        });
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onPassword1Change(e) {
        this.setState({
            password1: e.target.value
        });
    }

    onPassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
    }

    onAddressChange(e) {
        this.setState({
            address: e.target.value
        });
    }

    onContactChange(e) {
        this.setState({
            contact: e.target.value
        });
    }

    onCollegeNoChange(e) {
        this.setState({
            collegeNo: e.target.value
        });
    }

    onPassoutChange(e) {
        this.setState({
            passout: e.target.value
        });
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onDeptChange(e) {
        this.setState({
            dept: e.target.value
        });
    }

    onDegreeChange(e) {
        this.setState({
            degree: e.target.value
        });
    }

    onCollegeNameChange(e) {
        this.setState({
            collegeName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.type == "2") {
            const newCollege = {
                type: this.state.type,
                email: this.state.email,
                password: this.state.password1,
                contact: this.state.contact,
                address: this.state.address,
                collegeNo: this.state.collegeNo,
                collegeName: this.state.collegeName
            };

            if (this.state.password1 !== this.state.password2) {
                alert("Passwords do not match!!");
            }
            else {
                console.log("aci");
                axios.post('http://localhost:4000/register/addCollege', newCollege)
                    .then(res => {
                        console.log(res.data);
                        if (res.status) {
                            localStorage.setItem("collegeNo", newCollege.collegeNo);
                            localStorage.setItem("email", newCollege.email);
                            localStorage.setItem("userName", newCollege.collegeName);
                            console.log("Tryng to redirect");
                            this.setState({
                                redirect: true
                            });
                            //this.render();

                        }
                    }
                    );
                console.log(`Form submitted:`);
                console.log(`Name: ${this.state.collegeNo}`);
                console.log(`Email: ${this.state.email}`);
            }
        }
        else {
            const newUser = {
                type: this.state.type,
                name: this.state.name,
                email: this.state.email,
                password: this.state.password1,
                contact: this.state.contact,
                dept: this.state.dept,
                passout: this.state.passout,
                degree: this.state.degree,
                collegeName: this.state.collegeName
            };

            const newStatus = {
                userEmail: this.state.email,
                college: this.state.collegeName
            }

            if (this.state.password1 !== this.state.password2) {
                alert("Passwords do not match!!");
            }
            else {
                console.log("aci");
                axios.post('http://localhost:4000/register/addUser', newUser)
                    .then(res => {
                        console.log(res.data);
                        if (res.status) {
                            localStorage.setItem("userName", newUser.name);
                            localStorage.setItem("email", newUser.email);
                            console.log("Tryng to redirect");
                            this.setState({
                                redirect: true
                            });
                            //this.render();

                        }
                    }
                    );
                console.log(`Form submitted:`);
                console.log(`Name: ${this.state.name}`);
                console.log(`Email: ${this.state.email}`);

                axios.post('http://localhost:4000/register/addStatus', newStatus);

            }


        }

        this.setState({
            type: this.state.type,
            name: '',
            email: '',
            password1: '',
            password2: '',
            contact: '',
            address: '',
            collegeNo: '',
            passout: '',
            dept: '',
            gender: '',
            degree: ''
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/Dash" />
          }
        return (

            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                {/*---- Include the above in your HEAD tag --------*/}
                <div className="container register">
                    <div className="row">

                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt />
                            <h3 class="text-info">Welcome.</h3>
                            <h3 class="text-info">Connect.</h3>
                            <h3 class="text-info">Grow.</h3>
                            <input type="button" name defaultValue="Login" />
                            <br />
                        </div>

                        <div className="col-md-9 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active" 
                                        id="alumni-tab" 
                                        data-toggle="tab" 
                                        href="#alumni" 
                                        role="tab" 
                                        aria-controls="alumni" 
                                        aria-selected="true"
                                        onClick={this.onTypeChangeTo1}
                                    >
                                        Alumni
                </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="college-tab"
                                        data-toggle="tab"
                                        href="#college"
                                        role="tab"
                                        aria-controls="college"
                                        aria-selected="false"
                                        onClick={this.onTypeChangeTo2}
                                    >
                                        College
                </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane active"
                                    id="alumni"
                                    role="tabpanel"
                                    aria-labelledby="alumni-tab"
                                >
                                    <h3 className="register-heading">Register as an Alumni</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name *"
                                                    value={this.state.name}
                                                    onChange={this.onNameChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Year (Passout) *"
                                                    value={this.state.passout}
                                                    onChange={this.onPassoutChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password *"
                                                    value={this.state.password1}
                                                    onChange={this.onPassword1Change}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm Password *"
                                                    value={this.state.password2}
                                                    onChange={this.onPassword2Change}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input
                                                            type="radio"
                                                            name="gender"
                                                        />
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" />
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email *"
                                                    value={this.state.email}
                                                    onChange={this.onEmailChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    minLength={10}
                                                    maxLength={10}
                                                    name="txtEmpPhone"
                                                    className="form-control"
                                                    placeholder="Your Phone *"
                                                    value={this.state.contact}
                                                    onChange={this.onContactChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="College *"
                                                    value={this.state.collegeName}
                                                    onChange={this.onCollegeNameChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Department *"
                                                    value={this.state.dept}
                                                    onChange={this.onDeptChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Degree *"
                                                    value={this.state.degree}
                                                    onChange={this.onDegreeChange}
                                                    //required
                                                />
                                            </div>
                                            <input
                                                type="button"
                                                className="btnRegister"
                                                defaultValue="Register"
                                                onClick={this.onSubmit}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane"
                                    id="college"
                                    role="tabpanel"
                                    aria-labelledby="college-tab"
                                >
                                    <h3 className="register-heading">Register as a College</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name *"
                                                    value={this.state.collegeName}
                                                    onChange={this.onCollegeNameChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email *"
                                                    value={this.state.email}
                                                    onChange={this.onEmailChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    maxLength={10}
                                                    minLength={10}
                                                    className="form-control"
                                                    placeholder="Contact *"
                                                    value={this.state.contact}
                                                    onChange={this.onContactChange}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address *"
                                                    value={this.state.address}
                                                    onChange={this.onAddressChange}
                                                    //required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password *"
                                                    value={this.state.password1}
                                                    onChange={this.onPassword1Change}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm Password *"
                                                    value={this.state.password2}
                                                    onChange={this.onPassword2Change}
                                                    //required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="College No. *"
                                                    value={this.state.collegeNo}
                                                    onChange={this.onCollegeNoChange}
                                                    //required
                                                />
                                            </div>
                                            <input
                                                type="button"
                                                className="btnRegister"
                                                defaultValue="Register"
                                                onClick={this.onSubmit}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}