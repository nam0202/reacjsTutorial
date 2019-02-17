import React, { Component } from 'react';


class TasksList extends Component {
    render() {
        return (
            <div>
                <div class="card">
                    <img className="card-img-top" src="" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.content}</p>
                        <button type="button" className="btn btn-primary" onClick={()=> {this.clickTask('clicked')}}>Submit</button>
                    </div>
                </div>
{/* 
                <div>
                    {this.props.children}
                </div> */}
            </div>

        );
    }
    clickTask(data){
        console.log(data);
    }
}

export default TasksList;
