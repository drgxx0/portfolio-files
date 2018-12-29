import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react'

import DesktopNavBar from './desktop/DesktopNavBar'
import MobileNavBar from './mobile/MobileNavBar'


class NavBar extends Component {

  onHandleActiveItem = (e, { name }) => {
    this.props.onActiveItem(name)
  }



  render() {
    const { onSideBarManage, activeItem } = this.props
    return (
      <React.Fragment>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <DesktopNavBar activeItem={activeItem} onHandleActiveItem={this.onHandleActiveItem} />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <MobileNavBar onSideBarManage={onSideBarManage} />
        </Responsive>
      </React.Fragment>
    );
  }
} 


export default NavBar;