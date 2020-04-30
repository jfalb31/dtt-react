import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class LanguagePicker extends React.Component {

    onClick = () => {
        // TODO save language in cookie
        // forward to login
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Deficiency Update Tool</h1>
                <br />
                <h4>
                    Select a Language / choisissez une langue
                </h4>
                <br />
                <Button size="lg" onClick={this.onClick}>English</Button>
                &nbsp;
                <Button size="lg" onClick={this.onClick}>Français</Button>
            </Jumbotron>
        );
    }
}

export default LanguagePicker;
