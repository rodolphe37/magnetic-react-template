import React from 'react';
import './assets/css/reset.css';
import './assets/css/main.css';

import Header from './components/Header';
import Section from './components/Section';
import Inner from './components/Inner';

function App() {
  return (
    <div className="App">
     <Header />
     <Section />
    </div>
  );
}

export default App;
