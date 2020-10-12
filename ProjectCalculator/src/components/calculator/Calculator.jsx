import React, {Component} from 'react';
import './Calculator.css';
import Display from '../display/Display';
import Button from '../button/Button';

export default class Calculator extends Component {
    constructor(props) {
        super();

        this.state = {...props};
    }

    render() {
        return <div className='calculator'>
            <Display>Test</Display>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
        </div>;
    }
}