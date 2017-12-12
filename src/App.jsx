import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <div ClassName="App">
      <div className="App">
        <div className="App-title">
          <h3>FiberGraph </h3> 
        </div>
        <Form inline>
          <FormControl
            className="pass-input"
            placeholder='Password'
            type="password"
          />
          <Button bsStyle="primary">
            Connect
          </Button>
        </Form>
      </div>
    </div>
    );
  }
}

export default App;
  