import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.state = {
      select: 1,
      data: "vn"
    }
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;//target.type ==='checkbox?target.checked : target.value
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state)

  }
  render() {
    return (
      <div className="App mt-3">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onHandleChange}
              name="username"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="text"
              onChange={this.onHandleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              name="select"
              onChange={this.onHandleChange}
              value={this.state.select}
            >
              <option value={0} >Nu</option>
              <option value={1} >Nam</option>
            </select>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="data"
                value="en"
                onChange={this.onHandleChange}
                checked={this.state.data === "en"}
              /> radio 1
        </label>
            <label>
              <input
                type="radio"
                name="data"
                value="vn"
                onChange={this.onHandleChange}
                checked={this.state.data === "vn"}

              /> radio 2
        </label>
          </div>
          <div className="form-check form-check-inline">
            <input 
            className="form-check-input" 
            type="checkbox" id="inlineCheckbox1" 
            value="option1" 
            name="checkbox"
            onChange={this.onHandleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="Reset" className="btn btn-primary">Reset</button>
        </form>
      </div>
    );
  }
}

export default App;
