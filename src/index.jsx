import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import SideNav from './components/SideNav'
// import 'ionicons/dist/scss/ionicons'
import './styles'

const App = () => (
  <div className='Wrapper'>
    <SideNav />
    <div className='Main'>
      <Routes />
    </div>
  </div>
)

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
