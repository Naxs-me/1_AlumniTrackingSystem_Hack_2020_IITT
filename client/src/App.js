import React from 'react';
import Table from './components/Table';
import './App.css';
class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className = "Tablediv" >
          <Table />
        </div>
    );
  }
}

export default App;