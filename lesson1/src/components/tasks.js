import React, { Component } from 'react';


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: [{name:'column1',color:'red'}, {name:'column1',color:'green'}]
        }
    }

    showColor=(color)=>{
        return {
            backgroundColor: color
        }
    }
    render() {
        var status = this.state.status.map((item, index) => {
            return < button key={index} type="button" className="btn btn-primary" style={this.showColor(item.color)}>
                {item.name}
            </button >
        })

        return (
            <li className="list-group-item" >
                <p>Content: {this.props.content}</p>
                {status}
            </li>
        );
    }

}

export default Task;
