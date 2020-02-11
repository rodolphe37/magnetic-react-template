import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
    <header>
    <div className="logo">
        <a> <NavLink exact to="/"><img src={require("../../../assets/img/logo.png")} title="Magnetic" alt="Magnetic" /></NavLink></a>
    </div>
    <br /><br /><br /><br /><br />
    <a><NavLink exact to="/"><span aria-hidden="true">💁🏻‍♂️Home</span></NavLink></a><hr /><br />
    <a> <NavLink exact to="/about"><span aria-hidden="true">💸About</span></NavLink></a><hr /><br />
    <a> <NavLink exact to="/contact"><span aria-hidden="true">📩Contact</span></NavLink></a><hr /><br />
    <a><NavLink exact to="/inner"><span aria-hidden="true">💁🏻‍♂️History</span></NavLink></a>
    <div className="footer">
        <ul className="social">
          <li><a href="http://facebook.com" className="fb" data-title="Facebook" /></li>
          <li><a href="#" className="google" data-title="Google +" /></li>
          <li><a href="#" className="behance" data-title="Behance" /></li>
          <li><a href="#" class="twitter" data-title="Twitter"></a></li>
            <li><a href="#" class="dribble" data-title="Dribble"></a></li>
        </ul>{/* end social */}
        <div className="rights">
          <p>Copyright © 2020 magnetic-react.</p><br />
          <p>created by <br /><a href>Rodolphe Augusto</a></p>
        </div>{/* end rights */}
      </div>
      </header>
  </StyledMenu>


  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
