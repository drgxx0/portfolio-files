import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionsType from '../store/actionsType'

import Aux from '../hoc/.Aux/Aux'
import SideBar from '../component/UI/sidebar/SideBar'

import Navbar from '../component/navbar/NavBar'
import Home from '../component/home/Home'
import About from '../component/about/About'
import Projects from '../component/projects/Projects'
import Contact from '../component/contact/Contact'
import Footer from '../component/footer/footer'

class App extends Component {

  pageLocation = () => {
    const location = window.location.pathname;
    location.substr(1);
    this.props.onActiveItem(location)
  }  

  render() {
    const { sideBar, onActiveItem, onSideBarManage, activeItem } = this.props
    window.addEventListener('popstate', this.pageLocation())
    return (
      <Aux>
        <SideBar sideBar={sideBar} onSideBarManage={onSideBarManage}>
              <Navbar activeItem={activeItem} onSideBarManage={onSideBarManage} onActiveItem={onActiveItem} />
              <Switch>
                <Route exact path="/" render={() => <Home onActiveItem={onActiveItem} />} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Switch>
              <Footer />
        </SideBar>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    sideBar: state.sideBar,
    activeItem: state.activeItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSideBarManage: (stat) => dispatch({type: actionsType.SIDEBAR, stat}),
    onActiveItem: (item) => dispatch({type: actionsType.ACTIVE_ITEM, item})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
