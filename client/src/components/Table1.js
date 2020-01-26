import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
import { Component } from 'react';
import axios from 'axios';
import Popup1 from './popup1';
import NavigationBar from './Navigation_Bar';
import { Button } from 'react-bootstrap';
var tableData = [];
var id = 0;


class Tables extends Component {


    createTable = () => {
        let table = []
        console.log("data is he==re");
        // console.log(this.state.tableData)
        console.log(this.state.pageTable)
        for (let i = 0; i < this.state.pageTable.length; i++) {
            let children = []
            let children2 = []

            if (this.state.pageTable[i]) {
                children.push(<td>
                    <div className="bigDiv">
                        <div className="bigDiv1">
                            <span className="timeStamp">{`${this.state.pageTable[i]["NoticeName"]}`}</span>
                        </div>
                        <div className = "table_button">
                            <Button variant="outline-light" type="submit" id="chb" onClick={this.togglePopup.bind(this,this.state.pageTable[i])}> More Details</Button>

                            {this.state.showPopup ?
                                <Popup1
                                    text='Click "Close Button" to hide popup'
                                    closePopup={this.togglePopup.bind(this,this.state.pageTable[i])}
                                />
                                : null
                            }
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </td>)
            }
            table.push(<tr id="tr1">{children}</tr>)
        }
        return table
    }
    togglePopup(problem) {
        this.setState({
            showPopup: !this.state.showPopup

        });
        console.log("test");
        console.log(problem);
        localStorage.setItem("Name",JSON.stringify(problem));
        console.log("test2");
        console.log(JSON.parse(localStorage.getItem("Name")));
    }
    constructor(props) {
        super(props);
        this.togglePopup = this.togglePopup.bind(this)
        this.setState({ gotData: false });
        this.state = {
            tableData: [],
            pageTable: [],
            showPopup: false
        }
    }

    componentWillMount() {
        axios.post('http://localhost:4000/post')
            .then(res => {
                console.log(res.data);
                this.setState({ pageTable: res.data });
                var visited = [];
                for (var i = 0; i < this.state.pageTable.length; i++) {
                    visited.push(0);
                } 
                
                // console.log("page table");
                // console.log(this.state.pageTable);
                // console.log("distance");
                // console.log("Session : ", res.data.session);
                // //this.props.addSession(res.data.session);
                // console.log("Tryng to redirect");
                this.setState({ gotData: true })
            });
    }

    render() {
        return (
            <div>
                <NavigationBar />
            <center>
                <div className="withtable">
                    <h3 id="h21">Notices</h3>
                    <table bordered responsive striped border hover class className="newTable">{this.createTable()}</table>
                </div>
            </center>
            </div>
        );
    }

}

export default Tables;
