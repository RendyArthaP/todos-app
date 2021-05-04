import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector((state) => state.handleAuth.isLogged);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLogin ? <Redirect to="/home" /> : <Redirect to="/login"/>}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          {!isLogin ? <Redirect to="/login" /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
