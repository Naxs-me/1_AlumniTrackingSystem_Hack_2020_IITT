import React from 'react';
import './App.css';
class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log("in App : ");
    return (
      <div>
        <div>
          <p>the app is running</p>
        </div>
      </div>
    );
  }
}

export default App;