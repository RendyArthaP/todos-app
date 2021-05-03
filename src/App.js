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
          {isLogin ? <Login /> : <Redirect to="/"/>}
        </Route>
        <Route path="/register">
          {isLogin ? <Register /> : <Redirect to="/"/>}
        </Route>
        <Route path="/home">
          {!isLogin ? <Home /> : <Redirect to="/"/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
