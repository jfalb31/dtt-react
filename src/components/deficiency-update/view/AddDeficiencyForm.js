import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddDeficiencyForm extends React.Component {

  defNumRef = React.createRef();
	engDescRef = React.createRef();
	freDescRef = React.createRef();
	selectableRef = React.createRef();
  citableRef = React.createRef();
  sortRef = React.createRef();

	createDeficiency = (event) => {
		event.preventDefault();
		const deficiency = {
      defNum: this.defNumRef.current.value,
    	engDesc: this.engDescRef.current.value,
    	freDesc: this.freDescRef.current.value,
    	selectable: this.selectableRef.current.value === "on" ? 1 : 0,
      citable: this.citableRef.current.value === "on" ? 1 : 0,
      sort: this.sortRef.current.value
		};
		this.props.addDeficiency(this.props.level, deficiency);
		// refresh the form
		event.currentTarget.reset();
	}

  render() {
    return (
      <Form onSubmit={this.createDeficiency}>
        <Form.Group controlId="formDeficiencyNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control ref={this.defNumRef} type="number" />
        </Form.Group>
        <Form.Group controlId="formEngDesc">
          <Form.Label>English Description</Form.Label>
          <Form.Control ref={this.engDescRef} type="text" />
        </Form.Group>
        <Form.Group controlId="formFreDesc">
          <Form.Label>French Description</Form.Label>
          <Form.Control ref={this.freDescRef} type="text" />
        </Form.Group>
        <Form.Group controlId="formSelectable">
          <Form.Check ref={this.selectableRef} type="checkbox" label="Selectable?" />
        </Form.Group>
        <Form.Group controlId="formCitable">
          <Form.Check ref={this.citableRef} type="checkbox" label="Citable?" />
        </Form.Group>
        <Form.Group controlId="formSort">
          <Form.Label>Sort Sequence</Form.Label>
          <Form.Control ref={this.sortRef} type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">Add</Button>
      </Form>
    );
  }
}

export default AddDeficiencyForm;
