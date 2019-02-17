import React, { Component } from 'react';
import {
} from 'react-bootstrap';
import callApi from '../../utils/apiCaller';

import Lists from '../../components/Lists/Lists';

import {Link,Redirect} from 'react-router-dom'
class BoardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      boards: {}
    };
  }

  componentDidMount() {
    var id = this.props.match.url.split('/').reverse()[0];
    console.log(id);
    callApi(`boards/${id}/list`, 'GET', null).then(res => {
      this.setState({
        lists: res.data,
        boards: res.data[0].boards
      })
    })
  }

  render() {
    var logIn = localStorage.getItem('token');
    if(!!!logIn){
      return <Redirect to={{
        pathname:'/home',
      }} />
    }
    var { lists } = this.state;
    var { boards } = this.state;
    // var { Boards } = this.props;
    return (
      <div>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="#">Boards: {boards.name}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Add Member</Link>
            </li>
          </ul>
        </div>
        <div className="row" >
          {this.showLists(lists)}
        </div>
      </div>
    );
  }

  onDelete = (id) => {
    var { boards } = this.state;
    callApi(`boards/${id}`, 'DELETE', null).then(res => {
      if (res.status === 200) {
        let index = boards.findIndex(item => item.id === id);
        boards.splice(index, 1);
        this.setState({
          boards: boards
        })
      }
    })
  }

  

  showLists = (lists) => {
    var result = null;
    if (lists.length > 0) {
      result = lists.map((list, index) => {
        return (
          <div className="col-3" key={index}>
            <Lists 
              list={list}
              index={index}
              onDelete={this.onDelete}
              match = {this.props.match}
              history = {this.props.history}
            />
          </div>
        );
      })
      return result;
    }
  }

}

export default BoardPage;//connect(mapStateToProps, null)(BoardPage);
