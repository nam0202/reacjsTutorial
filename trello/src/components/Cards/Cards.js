import React, { Component } from 'react';

import callApi from '../../utils/apiCaller'

class Cards extends Component {

  onDeleteCards = (id) => {
    if (confirm('Bạn chắc chắn xoá ?')) { //eslint-disable-line
      this.props.onDeleteCards(id);
    }
  }
  onChange = (e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
  onSave = (e)=>{
    var {listsId} = this.state;
    var {card} = this.props;
    card.listsId = listsId
    callApi('cards','PUT',card).then(res=>{
    })
  }
  render() {
    var { card } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <p>{card.title}</p>
          <a   data-toggle="collapse" href={"#collapse"+card.id+card.title} aria-expanded="false" aria-controls={"collapse"+card.id+card.title}>
            move
          </a>
          <div class={"collapse"} id={"collapse"+card.id+card.title}>
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>List Number</label>
                <input
                  type="number"
                  name="listsId"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>&nbsp;	&nbsp;	&nbsp;	
          <a onClick={() => this.onDeleteCards(card.id)} href="#">delete</a>
        </div>
      </div>
    );
  }
}

export default Cards;
