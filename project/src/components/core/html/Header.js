import React, { Component } from 'react';
import {  NavDropdown, Navbar, MenuItem, Nav } from 'react-bootstrap';
import { NavLink,Link,Route } from 'react-router-dom';
const menu =[
    {
        name: 'Trang Chu',
        to:'/',
        exact:true
    },
    {
        name: 'Gioi Thieu',
        to:'/about',
        exact:false
    },
    {
        name: 'Lien He',
        to:'/contact',
        exact:false
    },
    {
        name: 'Dang Nhap',
        to:'/login',
        exact:false
    },
    {
        name: 'Task',
        to:'/tasks',
        exact:false
    }
];
const MenuLink = ({label,to ,activeOnlyExact})=>{
    return (
        <Route path={to} exact={activeOnlyExact} children={({match})=>{
            // var active = match ? 'something': '';
            return (
               <li> <Link  to={to}>{label}</Link></li>
            )
        }}/>
    );
}
class Header extends Component {
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
                        {/* <Nav.Link eventKey={1} href="/home" >
                            Link
                        </Nav.Link>
                        <NavItem eventKey={2} href="/about">
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
                </Navbar>
        </div>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if(menus.length>0){
            result = menus.map((item,index)=>{
                return  <MenuLink key={index} label={item.name} to={item.to}>
                        </MenuLink>
            })
        }
        return result;
    }
}

export default Header;
