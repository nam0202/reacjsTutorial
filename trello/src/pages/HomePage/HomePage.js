import React, { Component } from 'react';
import {
} from 'react-bootstrap';
import Navbar from '../../core/Navbar/Navbar';
import callApi from '../../utils/apiCaller';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
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
    var {username,password} = this.state;
    callApi('authenticate','POST',{
      username: username,
      password: password
    }).then(res=>{
      localStorage.setItem('token',res.data['id_token']);
      this.props.history.push('/boards');
    })
  }
  logout = ()=>{
    localStorage.removeItem('token');
    this.props.history.push('/home');
  }
  render() {
    var logIn = localStorage.getItem('token');
    if(!!logIn){
      return (
        <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-10">
          <button className="btn btn-danger" onClick={this.logout}>Log out</button>
  
        </div>
      </div>
      );
    }
    var {username,password} = this.state;
    return (
      <div className="row">
        <div className="col-2">
          <Navbar />
        </div>
        <div className="col-10">
          <form onSubmit={this.onSave}>
            <legend>Login Form</legend>
            <div className="form-group">
              <label >UserName</label>
              <input 
              type="text" 
              className="form-control"  
              placeholder="Enter username" 
              name="username"
              value={username}
              onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
              type="password" 
              className="form-control" 
              placeholder="Password" 
              name="password"
              value={password}
              onChange = {this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
