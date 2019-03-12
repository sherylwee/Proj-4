import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Dashboard from '../components/user/dashboard'
import 'semantic-ui-css/semantic.min.css'
// import '../../../dist/semantic.min.css';

import { BrowserRouter } from "react-router-dom";



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})