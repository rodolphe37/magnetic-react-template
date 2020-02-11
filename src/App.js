import React  from 'react';
import { Route } from 'react-router-dom';
import './assets/css/reset.css';
import './assets/css/main.css';
import Home from './components/Home';
import About from './components/About';
import TheTeam from './components/TheTeam';
import Contact from './components/Contact';
import ModalSimple from './components/ModalSimple'

function App() {
  return (
    <div id="background">
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/the-team" exact component={TheTeam} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/inner" exact component={ModalSimple} />
    </div>
  );
}

export default App;
