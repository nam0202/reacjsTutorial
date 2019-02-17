import React, { Component } from 'react';
import './App.css';
// import TasksList from './components/task-list';
import Header from './components/header';
import Task from './components/tasks';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          name: "don dep"
        },
        {
          name: "cai dat"
        },
        {
          name: "be vac"
        }
      ],

    }
  }
  render() {
      let element1 = this.state.array.map((item, index) => {
        return <Task key={index} content={item.name}></Task>
      })
    
    return (
      <div>
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  First Column
               </div>
                <ul className="list-group list-group-flush">
                  {'<script>alert(\'hello\') </script>'}
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  First Column
               </div>
                <ul className="list-group list-group-flush">
                  {this.state.element2}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
