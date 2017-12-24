import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { EntypoHome } from 'react-entypo'

class SideNav extends Component {
  state = {
    sideNavIsHidden: true
  }

  toggleSideNav = () => {
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
              {/* <i className="Sidebar-menuIcon ion-ios-home-outline"></i> */}
              <EntypoHome />
              <a href="">Home</a>
            </li>
            <li className="Sidebar-navItem">          
              <i className="Sidebar-menuIcon ion-ios-person-outline"></i>
              <a href="#">About</a>
            </li>
            <li className="Sidebar-navItem">          
              <i className="Sidebar-menuIcon ion-ios-home-outline"></i>
              <a href="#">Projects</a>
            </li>
            <li className="Sidebar-navItem">          
              <i className="Sidebar-menuIcon ion-ios-home-outline"></i>
              <a href="#">Blog</a>
            </li>
            <li className="Sidebar-navItem">          
              <i className="Sidebar-menuIcon ion-ios-home-outline"></i>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <footer className="Sidebar-footer" onClick={this.toggleSideNav}>
          <i className={`Sidebar-toggleArrow Sidebar-menuIcon fa fa-arrow-left ${this.state.sideNavIsHidden && 'rotate'}`}></i>
          <span className="Sidebar-toggleText">Minimize</span>
        </footer>
      </div>
    )
  }
}

export default SideNav