import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className=''>
    <h1>Page Not Found...</h1>
    <Link to='/'>Go To Homepage</Link>
  </div>
)

export default NotFoundPage
