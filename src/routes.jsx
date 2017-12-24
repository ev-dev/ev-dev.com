import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/home' render={() => <Redirect to='/' />} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/projects' component={ProjectsPage} />
    <Route path='/*' component={NotFoundPage} />
  </Switch>
)

export default Routes