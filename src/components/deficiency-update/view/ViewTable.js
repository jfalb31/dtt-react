import React from 'react';
import Table from 'react-bootstrap/Table';
import ViewTableRow from './ViewTableRow';

class ViewTable extends React.Component {

  render() {
    const deficiencies = this.props.deficiencies;
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>English Description</th>
            <th>French Description</th>
            <th>Selectable</th>
            <th>Citable</th>
            <th>Sort Sequence</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(deficiencies).map(key => <ViewTableRow key={key} index={key} deficiency={deficiencies[key]} />)}
        </tbody>
      </Table>
    );
  }
}

export default ViewTable;
