import React, {Component} from 'react';
import './Calculator.css';
import Button from './../button/button';

export default class Calculator extends Component {
    constructor(props) {
        super();

        this.state = {...props};
    }

    render() {
        return <div className='calculator'>
            <Button>Clear</Button>
        </div>;
    }
}