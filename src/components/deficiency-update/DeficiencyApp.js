import React from 'react';
import NavBar from './NavBar';
import DeficiencyJumbotron from './DeficiencyJumbotron';
import deficiencies from '../../helpers/deficiencies'

class DeficiencyApp extends React.Component {

  state = {
    deficiencies: deficiencies
  };

  render() {
    return (
      <>
      <NavBar history={this.props.history} />
      <DeficiencyJumbotron />
      </>
    );
  }
}

export default DeficiencyApp;
