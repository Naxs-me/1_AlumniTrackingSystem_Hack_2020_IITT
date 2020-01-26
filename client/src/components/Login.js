import React from 'react';
import { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navigation from './Navigation_Bar';
import { Redirect } from 'react-router-dom'
import '../App.css';
import axios from 'axios';


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //console.log("Props");
    //console.log(this.props);

    this.state = {
      email: '',
      password: '',
      type: '',
      redirect: false

    }

  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });

  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  onTypeChange(e) {
    this.setState({
      type: e.target.value
    });
  }

  onSubmit(e) {
    console.log("submit");
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(`Form submitted:`);
    console.log(`Email: ${this.state.email}`);

    if(this.state.type == "Alumni")
    {
    axios.post('http://localhost:4000/Login/adda', newUser)
      .then(res => {
        console.log(res.data);
        if (res.data.status) {
          console.log(this.props);
          console.log("res.data.session");
          console.log(res.data.session);
          localStorage.setItem("userName", res.data.session.user.name);
          localStorage.setItem("userEmail", res.data.session.user.email);
          //console.log(toString(localStorage.getItem("userData")));
          //this.props.addSession(res.data.session);
          console.log("Session : ", res.data.session);
          console.log("Tryng to redirect");
          this.setState({
            redirect: true
          });
          //this.render();

        }

      });
    }
    else if (this.state.type=="College")
    {
      axios.post('http://localhost:4000/Login/addc', newUser)
      .then(res => {
        console.log(res.data);
        if (res.data.status) {
          //console.log(this.props);
          console.log("res.data.session");
          console.log(res.data.session);
          localStorage.setItem("userName", res.data.session.user.collegeName);
          localStorage.setItem("userEmail", res.data.session.user.email);
          //console.log(toString(localStorage.getItem("userData")));
          //this.props.addSession(res.data.session);
          console.log("Session : ", res.data.session);
          console.log("Tryng to redirect");
          this.setState({
            redirect: true
          });
          //this.render();

        }

      });
    }


    this.setState({
      email: '',
      password: '',
      type:''
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/Dash" />
    }
    return (
      <div>
        <Container className="Login">
          <Form onSubmit={this.onSubmit}>
            <p className="header">Login</p>
            <p className="formBasic1">
              <Form.Group controlId="formBasicGender">
                <Form.Label id="try">Alumni  </Form.Label>
                <input type="radio" required name="type" value="Alumni" checked={this.state.type === "Alumni"} onChange={this.onTypeChange} />
                <Form.Label id="try">College  </Form.Label>
                <input type="radio" required name="type" value="College" checked={this.state.type === "College"} onChange={this.onTypeChange} />
              </Form.Group>
              </p>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="formBasic">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onEmailChange} required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
      </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="formBasic">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required />
              </Form.Group>
              <Button variant="outline-light" type="submit" id="chb">
                Login
    </Button>
          </Form>
        </Container>
      </div>
        );
      }
    }
    
export default LoginPage;