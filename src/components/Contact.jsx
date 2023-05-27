import React from 'react';
import { Link } from "react-router-dom";


function Contact() {
  return (
    <div>
     <h1>This is the about page</h1>
      <Link to="/">Home</Link> <br></br>
      <Link to="/about">aboiut us</Link>
    </div>
  );
}

export default Contact;
