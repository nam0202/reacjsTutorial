import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      isConfirm: false
    }
  }

  onClick = (isConfirm)=>{
      this.setState({
        isConfirm:isConfirm
      })
  }
  render() {
    return (
      <div >
            <h1>Contract</h1>
            <button type="button" onClick={()=>this.onClick(false)} className="btn btn-infor">Cho phep</button>
            <button type="button" onClick={()=>this.onClick(true)} className="btn btn-danger">Khong Cho phep</button>
            <Prompt 
              when={this.state.isConfirm}
              message={ location =>(`Are you sure ${location.pathname}`)}
            />
      </div>
    );
  }
}

export default Contact;
