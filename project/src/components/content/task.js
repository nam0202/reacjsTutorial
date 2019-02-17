import React, { Component } from 'react';

class Task extends Component {
  render() {
    var {match} = this.props;
    var name = match.params.slug;
    return (
      <div >
            <h1>Chi tiet {name}</h1>
      </div>
    );
  }
}

export default Task;
