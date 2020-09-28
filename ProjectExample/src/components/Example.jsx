import React, {Component} from 'react';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
        this.state.content = props.children;
    }

    render() {
        const {total, content} = this.state;

        let result = [];

        for (let cont = 0; cont < total - 1; cont++) {
            result.push(content);
        }

        return result;
    }
}