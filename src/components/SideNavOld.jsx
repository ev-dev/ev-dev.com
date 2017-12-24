import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const pages = [ 'Home', 'About', 'Projects' ]

class SideNav extends Component {
  state = {
    sideNavIsShowing: false
  }

  toggleSideNav = () => {
    console.log('toggling sidenav...')
    this.setState({ sideNavIsShowing: !this.state.sideNavIsShowing })
  }

  render() {
    return (
      <div className='wrapper'>

        <label id='menuTogglerLabel' className='menu-toggler' role='button' aria-pressed='false' aria-expanded='false' aria-label='Navigation button'>
          <input onClick={this.toggleSideNav} type='checkbox' id='menuToggler' className='input-toggler' value='1' autoFocus />
          
          <span className='menu-toggler__line' />
          <span className='menu-toggler__line' />
          <span className='menu-toggler__line' />
        </label>

        
        {/* <nav id='sidebar' className='sidebar' role='navigation' aria-labelledby='menuTogglerLabel' aria-hidden={true}>
          <ul id='menubar' className='menu' role='menubar' aria-orientation='vertical'>
            {pages.map((page, i) => (
              <li className='menu__item' role='none' key={i}>
                <Link 
                  to={`/${page.toLowerCase()}`} 
                  onClick={this.toggleSideNav}
                  className='menu__link' 
                  role='menuitem' 
                  tabIndex={-1}>
                  { page }
                </Link>
              </li> 
            ))}
          </ul>
        </nav> */}


        {this.state.sideNavIsShowing &&
          <nav id='sidebar' className='sidebar' role='navigation' aria-labelledby='menuTogglerLabel' aria-hidden={true}>
            <ul id='menubar' className='menu' role='menubar' aria-orientation='vertical'>
              {pages.map((page, i) => (
                <li className='menu__item' role='none' key={i}>
                  <Link 
                    to={`/${page.toLowerCase()}`} 
                    onClick={this.toggleSideNav}
                    className='menu__link' 
                    role='menuitem' 
                    tabIndex={0}>
                    { page }
                  </Link>
                </li> 
              ))}
            </ul>
          </nav>
        }
      </div>
    )
  }
}

export default SideNav
