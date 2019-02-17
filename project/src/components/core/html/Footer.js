import React, { Component } from 'react';
import { NavItem, NavDropdown, Navbar, MenuItem, Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const menu =[
    {
        name: 'Home',
        to:'/home',
        exact:true
    },
    {
        name: 'About',
        to:'/about',
        exact:true
    }
];
const MenuLink = ({label,to ,activeOnlyExact})=>{
    return (
        <Route path={to} exact={activeOnlyExact} children={({match})=>{
            var active = match ? 'something': '';
            return (
                <Link to={to}>{label}</Link>
            )
        }}/>
    );
}
class Footer extends Component {
    render() {
        return (
            <div >
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink to="/home">React-Bootstrap</NavLink>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {/* <NavItem eventKey={1} >
                            <NavLink exact activeStyle={{
                                backgroundColor: 'white',
                                color :'red'
                            }} to="/home">home</NavLink>

                        </NavItem>
                        <NavItem eventKey={2} href="about">
                            <NavLink to="/about">about</NavLink>
                        </NavItem> */}
                        {this.showMenu(menu)}
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>;
        </div>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if(menus.length>0){
            result = menus.map((item,index)=>{
                console.log(1);
                return  <NavItem key={index} eventKey={index} >
                           <MenuLink 
                           label={item.name} 
                           to={item.to} 
                           activeOnlyExact={item.exact} />
                        </NavItem>
            })
        }
        return result;
    }
}

export default Footer;
