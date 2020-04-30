import React from 'react';

class ViewTableRow extends React.Component {

  render() {
    const deficiency = this.props.deficiency;
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{deficiency.engDesc}</td>
        <td>{deficiency.freDesc}</td>
        <td>{deficiency.selectable}</td>
        <td>{deficiency.citable}</td>
        <td>{deficiency.sort}</td>
      </tr>
    );
  }
}

export default ViewTableRow;
