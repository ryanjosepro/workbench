import React, {Component} from 'react';

export default class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {...props};
        this.state.textCells = props.children;
    }

    setTotCols(e) {
        this.setState({totCols: e.target.value});
    }

    setTotRows(e) {
        this.setState({totRows: e.target.value});
    }

    setTextHeaders(e) {
        this.setState({textHeaders: e.target.value});
    }

    setTextCells(e) {
        this.setState({textCells: e.target.value});
    }

    render() {
        const {totCols, totRows, textHeaders, textCells} = this.state;
        let headers = [];
        let cols = [];

        for (let cont = 0; cont < totCols; cont++) {
            headers.push(<th>{textHeaders}</th>);
            cols.push(<td>{textCells}</td>);
        }
        
        let rows = [headers];

        for (let cont = 0; cont < totRows; cont++) {
            rows.push(<tr>{cols}</tr>);
        }

        return (
        <div>
            <input className='col-sm-3' type='text' placeholder='Total Columns' onChange={e => this.setTotCols(e)} value={totCols}></input>
            <input className='col-sm-3' type='text' placeholder='Total Rows' onChange={e => this.setTotRows(e)} value={totRows}></input>
            <input className='col-sm-3' type='text' placeholder='Headers Text' onChange={e => this.setTextHeaders(e)} value={textHeaders}></input>
            <input className='col-sm-3' type='text' placeholder='Cells Text' onChange={e => this.setTextCells(e)} value={textCells}></input>
            <table className='table table-dark'>{rows}</table>
        </div>
        )
    }
}