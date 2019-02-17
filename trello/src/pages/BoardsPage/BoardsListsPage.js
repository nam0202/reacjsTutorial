import React, { Component } from 'react';
import {

} from 'react-bootstrap';
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import Navbar from '../../core/Navbar/Navbar';
import {Redirect} from 'react-router-dom';
import Boards from '../../components/Boards/Boards';
const mapStateToProps = state => {
  return {
    Boards: state.Boards
  }

}

class BoardsListsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    callApi('boards', 'GET', null).then(res => {
      this.setState({
        boards: res.data
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
    console.log(logIn);
    var { boards } = this.state;
    // var { Boards } = this.props;
    return (
      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-10">
          <div className="card border-dark mb-3" >
            <div className="card-header"><h2><i className="fas fa-clock"></i>Lists Boards</h2></div>
            <div className="card-body ">
              <div className="row">
                {this.showBoards(boards)}

              </div>
            </div>
          </div>
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



  showBoards = (boards) => {
    var result = null;
    if (boards.length > 0) {
      result = boards.map((board, index) => {
        return (
          <div className="col-2" key={index}
          >
            <Boards
              board={board}
              index={index}
              match={this.props.match}
              onDelete={this.onDelete}
            />
          </div>
        );
      })
      return result;
    }
  }

}

export default connect(mapStateToProps, null)(BoardsListsPage);
