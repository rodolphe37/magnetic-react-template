import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from './About';
import TheTeam from './TheTeam';
import Contact from './Contact';
import ModalSimple from './ModalSimple'


const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="index.html"><img src={require("../assets/img/logo.png")} title="Magnetic" alt="Magnetic" /></a>
      </div>{/* end logo */}
      <div id="menu_icon" />
      <nav>
        <Router>
          <ul>
            <Link to="/index.html" className="selected">Home</Link>
            <hr /><br />
            <Link to="/about">About</Link>
            <hr /><br />
            <Link to="/the-team">The Team</Link>
            <hr /><br />
            <Link to="/contact">Contact</Link>
            <hr /><br />
            <Link to="/inner">history</Link>
            <hr /><br />
          </ul>
          <Route path="/about" component={About} />
          <Route path="/the-team" component={TheTeam} />
          <Route path="/contact" component={Contact} />
          <Route path="/inner" component={ModalSimple} />
        </Router>
      </nav>{/* end navigation menu */}
      <div className="footer clearfix">
        <ul className="social clearfix">
          <li><a href="http://facebook.com" className="fb" data-title="Facebook" /></li>
          <li><a href="#" className="google" data-title="Google +" /></li>
          <li><a href="#" className="behance" data-title="Behance" /></li>
          <li><a href="#" class="twitter" data-title="Twitter"></a></li>
            <li><a href="#" class="dribble" data-title="Dribble"></a></li>
        </ul>{/* end social */}
        <div className="rights">
          <p>Copyright © 2020 magnetic-react.</p>
          <p>created by <a href>Rodolphe Augusto</a></p>
        </div>{/* end rights */}
      </div>{/* end footer */}
    </header>

  )
}

export default Header;

