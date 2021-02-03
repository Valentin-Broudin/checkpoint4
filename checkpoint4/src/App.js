import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Accueil from './components/Accueil'
import Profil from './components/Profil'
import FamilleRoyale from './components/FamilleRoyale';
import SujetsRoyaux from './components/SujetsRoyaux';
import Commerces from './components/Commerces';
import ContactezNous from './components/ContactezNous';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Accueil" component={Accueil} />
        <Route path="/Profil" component={Profil} />
        <Route path="/FamilleRoyale" component={FamilleRoyale} />
        <Route path="/SujetsRoyaux" component={SujetsRoyaux} />
        <Route path="/Commerces" component={Commerces} />
        <Route path="/ContactezNous" component={ContactezNous} />
      </Switch>
    </div>
  );
}

export default App;
