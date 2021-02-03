import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Accueil from './components/Accueil'
import Profil from './components/Profil'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Accueil" component={Accueil} />
        <Route path="/Profil" component={Profil} />
      </Switch>
    </div>
  );
}

export default App;
