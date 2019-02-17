import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>
                         <ListGroup bsClass="list-group">
                            <li className="list-group-item"><Link to="/home" >Home</Link></li>
                            <li className="list-group-item"><Link to="/boards" >Boards</Link></li>
                            <li className="list-group-item"><Link to="/boards/add" >Create Boards</Link></li>
                        </ListGroup>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h3>TEAMS</h3>
                    </ListGroupItem>
                    <ListGroupItem onClick={this.alertClicked}>Trigger an alert</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
    alertClicked() {
        alert('click')
    }
}

export default Navbar;
