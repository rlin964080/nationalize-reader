import React from "react";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CountryOrigin from './CountryOrigin'

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = { isNationalityOn: false};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isNationalityOn: !prevState.isNationalityOn
        }));
    }

    render () {
        let body = <><h2>Click the Button to see go through the Nationality Application </h2></>;
        if (this.state.isNationalityOn) {
            body = < CountryOrigin></CountryOrigin>
        }
        return (
            <div
                style={{
                    

                }}
                >

                <h1>Name Nationality Application</h1>
                <Button onClick={this.handleClick}>
                    {this.state.isNationalityOn ? 'Close Application':'Click to Start'}
                </Button>
                {body}
            </div>
        );

    }
}

export default App;
