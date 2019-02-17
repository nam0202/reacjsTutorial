import React, { Component } from 'react';
import {
} from 'react-bootstrap';
import { Link } from 'react-router-dom'
class Boards extends Component {

  onDelete = (id) => {
    if (confirm('Bạn chắc chắn xoá ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    console.log(this.location);
    var { board, match } = this.props;
    return (
      <div className="card border-primary" >
        <div className="card-header"><h4>{board.name}</h4></div>
        <div className="card-body text-primary">
          <div className="row">
            <Link className="btn btn-primary col-12 mb-2" to={`${match.url}/${board.id}`}>Chi Tiet</Link>
            <Link
              className="btn btn-danger col-12"
              to="#"
              onClick={() => this.onDelete(board.id)}
            >Xoa
          </Link>
          </div>
        </div>
      </div>


    );
  }
}

export default Boards;
