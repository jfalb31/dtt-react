import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class DeficiencyJumbotron extends React.Component {

  state = {};

  render() {
    return (
      <Jumbotron>
        <h1>Deficiency Update Tool</h1>
        <p>Update the dificiencies for the deficiency tracking tool</p>
        <p>
          <Button variant="primary">Start Updating »</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default DeficiencyJumbotron;
