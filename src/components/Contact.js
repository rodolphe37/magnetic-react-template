import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>The Contact section</h1>
      <Button  color="primary">
        <NavLink exact to="/">return to Home</NavLink>
      </Button>
    </div>
  )
}

export default Contact;
