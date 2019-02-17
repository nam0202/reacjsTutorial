import React, { Component } from 'react';
import {

} from 'react-bootstrap';
import callApi from '../../utils/apiCaller';
import {Link,Redirect} from 'react-router-dom';

class BoardsActionPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      background:''

    }
  };
  onChange = (e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }

  onSave = (e)=>{
    e.preventDefault();
    var {name,background} = this.state;
    var {history} = this.props;
    callApi('boards','POST',{
      name: name,
      background: background
    }).then(res=>{
      history.push('/boards');
    })
  }
  render() {
    var logIn = localStorage.getItem('token');
    if(!!!logIn){
      return <Redirect to={{
        pathname:'/home',
      }} />
    }
    var {name,background} = this.state;
    return (
      <div>
          <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Boards</label>
            <input 
              type="text" 
              name="name" 
              className="form-control"
              value={name}
              onChange = {this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Hình nền</label>
            <input 
            type="text" 
            name="background"
             className="form-control" 
             value={background}              
             onChange = {this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <Link className="btn btn-infor" to="/boards">Trở lại</Link>
          </form>
      </div>
    );
  }
}

export default BoardsActionPage;
