import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }
  
  onChange =(e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox'? target.checked :target.value;
    this.setState({
      [name]:value
    })
  }

  onSubmit =(e)=>{
    e.preventDefault();
    if(this.state.username === 'admin' && this.state.password === 'admin'){
      localStorage.setItem('user',JSON.stringify(this.state))
    }
  }

  render() {
    var logIn = localStorage.getItem('user');
    var {location} = this.props;
    console.log(location);
    if(logIn!==null){
      return <Redirect to={{
        pathname:'/tasks',
        state:{
          from: location
        }
      }} />
    }
    

    return (
      <div >
        <form onSubmit = {this.onSubmit}>
          <legend>Form Dang Nhap</legend>
          <div className="form-group">
            <label >Username</label>
            <input
              type="text"
              className="form-control" 
              name="username"
              value={this.state.username}
              onChange={ this.onChange}
              />
          </div>
          <div className="form-group">
            <label >Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value = {this.state.password}
              onChange={ this.onChange}

            />
          </div>
          <button type="submit"  className="btn btn-primary">Dang Nhap</button>
        </form>
      </div>
    );
  }
}

export default Login;
