import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>The About section</h1>
      <Button  color="primary">
        <NavLink exact to="/">return to Home</NavLink>
      </Button>
    </div>
  )
}

export default About;
