import React from 'react';
import NavBar from '../NavBar';
import ViewTable from './ViewTable';
import AddDeficiencyForm from './AddDeficiencyForm';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import deficiencies from '../../../helpers/deficiencies';

class DeficiencyView extends React.Component {

  state = {
    deficiencies: deficiencies
  };

  addDeficiency = (level, deficiency) => {
    // take a copy of existing
		const deficiencies = { ...this.state.deficiencies };
		// add our new deficiency
		deficiencies[level][deficiency.defNum] = deficiency;
		// set the new deficiencies object to state
		this.setState({
			deficiencies: deficiencies
		});
  }

  render() {
    return (
      <>
      <NavBar history={this.props.history} />
      <h1>View Deficiencies</h1>
      <Tabs defaultActiveKey="level1Defs" id="defs">
        <Tab eventKey="level1Defs" title="Level 1 Deficiencies">
          <AddDeficiencyForm level={"level1"} addDeficiency={this.addDeficiency} />
          <br />
          <ViewTable deficiencies={deficiencies.level1} />
        </Tab>
        <Tab eventKey="level2Defs" title="Level 2 Deficiencies">
          <AddDeficiencyForm level={"level2"} addDeficiency={this.addDeficiency} />
          <br />
          <ViewTable deficiencies={deficiencies.level2} />
        </Tab>
        <Tab eventKey="level3Defs" title="Level 3 Deficiencies">
          <AddDeficiencyForm level={"level3"} addDeficiency={this.addDeficiency} />
          <br />
          <ViewTable deficiencies={deficiencies.level3} />
        </Tab>
      </Tabs>
      </>
    );
  }
}

export default DeficiencyView;
