import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const pages = ['Home', 'About', 'Projects']

class SideNav extends Component {
  state = {
    sideNavIsHidden: true
  }

  toggleSideNav = () => {
    console.log('toggling sidenav...')
    this.setState({ sideNavIsHidden: !this.state.sideNavIsHidden })
  }

  render() {
    return (
      <div className={`Sidebar ${this.state.sideNavIsHidden && 'is-collapsed'}`}>
        <header className="Sidebar-header">
          <div className="Sidebar-logo"></div>
        </header>
        <nav role="navigation">
          <ul>
            <li className="Sidebar-navItem">
              <i className="Sidebar-menuIcon fa fa-bar-chart"></i>
              <a href="">Performance</a>
            </li>
            <li className="Sidebar-navItem">
              <i className="Sidebar-menuIcon fa fa-shopping-cart"></i>
              <a href="#">Activities</a>
            </li>
            <li className="Sidebar-navItem">
              <i className="Sidebar-menuIcon fa fa-cog"></i>
              <a href="#">Settings</a>
            </li>
            <li className="Sidebar-navItem">
              <i className="Sidebar-menuIcon fa fa-question-circle"></i>
              <a href="#">Help & Support</a>
            </li>
            <li className="Sidebar-navItem">
              <i className="Sidebar-menuIcon fa fa-sign-out"></i>
              <a href="#">Log out</a>
            </li>
          </ul>
        </nav>
        <footer className="Sidebar-footer" onClick={this.toggleSideNav}>
          <i className={`Sidebar-toggleArrow Sidebar-menuIcon fa fa-arrow-left ${this.state.sideNavIsHidden && 'rotate'}`}></i>
          <span className="Sidebar-toggleText">Minimize menu</span>
        </footer>
      </div>
    )
  }
}

export default SideNav