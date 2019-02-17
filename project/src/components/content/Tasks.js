import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Tasks extends Component {
  render() {
    var tasks = [
      {
        id: 1,
        slug:'lau-chui',
        name: 'don phong'
      },
      {
        id: 2,
        slug:'ki-thuat',
        name: 'cai may'
      },
      {
        id: 3,
        slug:'manager',
        name: 'quan lop'
      }
    ]

    var {location} = this.props;
    console.log(location);

    return (
      <div >
        <h1>List Task</h1>
        <div>
          {this.showListTask(tasks)}
        </div>
        <div>
          {/* <Route path="/task/:slug" component={Task}>
          
          </Route> */}
        </div>
      </div>
    );
  }

  showListTask = (tasks) => {
    var result = null;
    var {match} = this.props;
    var url = match.url;
    if (tasks.length > 0) {
      result = tasks.map((item, index) => {
        return <Panel key={index} bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Task {index}</Panel.Title>
          </Panel.Heading>
          <NavLink to = {`${url}/${item.slug}`}>
            <Panel.Body>{item.name}</Panel.Body>
          </NavLink>
        </Panel>
      })
    }
    return result;
  }
}

export default Tasks;
