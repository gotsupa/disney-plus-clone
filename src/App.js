import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/login' />
          </Route>

          <Route path='/login' component={Login} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
