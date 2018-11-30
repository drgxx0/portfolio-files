import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import NavBarItems from '../../navbar/navbaritems/NavBarItems'


const SideBar = ({ children, sideBar, onSideBarManage }) => {
    const handleSideBar = () => {
      if(sideBar) {
        onSideBarManage(false)
      }
    }
    return (
    <Sidebar.Pushable>
          <Sidebar as={Menu} animation='overlay' inverted vertical visible={sideBar}>
            <NavBarItems device='mobile' onSideBarManage={onSideBarManage} />
          </Sidebar>
          <Sidebar.Pusher
            dimmed={sideBar}
            style={{ minHeight: '100vh' }}
            onClick={handleSideBar}
            >
            <div>{children}</div>
            </Sidebar.Pusher>
    </Sidebar.Pushable>
    )}


SideBar.propTypes = {
  children: PropTypes.node,
  sideBar: PropTypes.bool,
  onSideBarManage: PropTypes.func
}
export default SideBar