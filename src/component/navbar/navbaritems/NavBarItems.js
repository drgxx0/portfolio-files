import React from 'react'

import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBarItems = ({onHandleActiveItem, activeItem, device, onSideBarManage }) => {
    const menuItems = ['home', 'about', 'projects', 'contact']
    const mapMenuItems = menuItems.map(item => {
        return <Menu.Item 
        key={item} 
        name={item} 
        active={activeItem === item} 
        as={NavLink} 
        exact 
        to={item === 'home' ? "/" : `/${item}`} 
        onClick={device === 'desktop'? onHandleActiveItem : device === 'mobile' ? () => onSideBarManage(false) : null} 
        style={{textTransform: 'capitalize'}}>{item}</Menu.Item>
    })
    return <React.Fragment>{mapMenuItems}</React.Fragment>
}

export default NavBarItems