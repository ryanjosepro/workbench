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
                    <Display>2*2</Display>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>+</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>=</Button>
                </div>;
    }
}