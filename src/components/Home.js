import React, { useState, useRef }  from 'react';
import Section from './Section';
import Header from './Header'
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from './BurgerMenu';
import FocusLock from 'react-focus-lock';

const Home = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="home-cl">
    <div id="menu_icon" />
      <div id="menu">
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
    </div>
    <div className="section-cl">
    <Menu />

    </div>
    <Section />
    </div>
  )
}

export default Home;

