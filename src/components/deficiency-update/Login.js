import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends React.Component {

    login = () => {
        this.props.history.push(`/dut`);
    }

    render() {
        return (
            <Jumbotron className="text-center">
                <Form>
                    <img src={`${process.env.PUBLIC_URL}/mapleleaf.png`} className="mb4" altwidth="72" height="72" alt="maple leaf" />
                    <br />
                    <br />
                    <Form.Group as={Row} controlId="formHorizontalUsername">
                        <Form.Label srOnly>
                            Username
                        </Form.Label>
                        <Col sm={3} />
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Username" />
                        </Col>
                        <Col sm={3} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label srOnly>
                            Password
                        </Form.Label>
                        <Col sm={3} />
                        <Col sm={6}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                        <Col sm={3} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={3} />
                        <Col sm={6}>
                            <Form.Check label="Remember me" />
                        </Col>
                        <Col sm={3} />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={3} />
                        <Col sm={6}>
                            <Button type="submit" onClick={this.login}>Sign in</Button>
                        </Col>
                        <Col sm={3} />
                    </Form.Group>
                </Form>
            </Jumbotron>
        );
    }

}

export default Login;
