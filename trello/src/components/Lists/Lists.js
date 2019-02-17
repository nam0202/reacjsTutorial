import React, { Component } from 'react';

import Cards from '../Cards/Cards';
import callApi from '../../utils/apiCaller'

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      content: '',
      boardsId: ''
    }
  }

  onSave = (e)=>{
    var {title,desciption} = this.state;
    var {history} = this.props;
    callApi('cards','POST',{
      title: title,
      desciption: desciption,
      listsId:this.props.list.id
    }).then(res=>{
      console.log(this.props.match.url);
      history.push(`${this.props.match.url}`);
    })
  }
  onChange = (e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
  render() {
    var { list } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          {list.id}:{list.content}
        </div>
        <div className="card-body">
          {this.showCards(list.cards)}
        </div>
        <div className="card-footer">
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapse"+list.id} aria-expanded="false" aria-controls={"collapse"+list.id}>
            create card
          </button>
          <div class={"collapse"} id={"collapse"+list.id}>
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Mieu Ta</label>
                <input
                  type="text"
                  name="desciption"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onDeleteCards = (id) => {
    callApi(`cards/${id}`, 'DELETE', null).then(res => {
      console.log(id);
      if (res.status === 200) {
        var { list } = this.props;
        var index = list.cards.findIndex(item => item.id === id);
        list.cards.splice(index, 1);
        this.setState({
          list: list
        })
      }

    })
  }
  showCards = (cards) => {
    var result = null;
    if (cards.length > 0) {
      result = cards.map((card, index) => {
        return (
          <Cards
            key={index}
            card={card}
            index={index}
            onDeleteCards={this.onDeleteCards}
          />
        )
      })
    }
    return result;
  }

}

export default Lists;
