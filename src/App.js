import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import { AuthProvider } from './contexts/AuthContext'

import  {useAuth} from './contexts/AuthContext'

const Routing = ()=>{

  const history = useHistory()
  const {currentUser} = useAuth()

  useEffect(()=>{
      if(currentUser !== null) {
        history.push('/home')
      }
      else{
        history.push('/')
      }
  })

  

  return (
    <Switch>
      <Route path="/" exact component={Signin}/>      
      <Route path="/home" exact component={Home}/>
      
    </Switch>
  )
}

function App() {

  return (
    <AuthProvider>
        <Router>
          <Routing/>          
        </Router>
    </AuthProvider>
  );
}

export default App;
