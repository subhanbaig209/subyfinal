import React from 'react';
import './Greetings.css';
import robinhoodLogo from './robinhood.png';
import resume from './SubhanBaigResWeb.pdf'
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Greetings = () => {
  return (
    <div className="greetings-container">
      <h1>Hi there! I'm Subhan. <span role="img" aria-label="Wave">👋🏽</span></h1>
      <p>I'm passionate about full-stack engineering, as it allows me to create products to help users' lives</p>
      <p>I'm interested in electric cars, playing FIFA, and traveling around the world</p>

      <p>
        Incoming Software Engineering Intern @ Robinhood
        <img
          src={robinhoodLogo}
          alt="Robinhood Logo"
          style={{ marginLeft: '5px', verticalAlign: 'middle', width: '35px', height: '35px' }}
        />
      </p>

      <div className="icon-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <a href={resume} target="_blank" rel="noopener noreferrer">
  <FaFilePdf size={60} color="black" style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/subhanbaig" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={60} color="black" style={{ margin: '0 15px' }} />
        </a>
        <a href="https://github.com/subhanbaig209" target="_blank" rel="noopener noreferrer">
          <FaGithub size={60} color="black" style={{ margin: '0 15px' }} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=subhanbaig209@gmail.com" target="_blank" rel="noopener noreferrer">

          <FaEnvelope size={60} color="black" style={{ margin: '0 15px' }} />
        </a>
      </div>
    </div>
  );
};

export default Greetings;
