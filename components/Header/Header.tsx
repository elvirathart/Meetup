import React from 'react';
// import './header.css';
import LogoImage from '../../assets/Logo.png';
import MeetupImage from '../../assets/meetup-logo.png';

export const Header = () => (
  <header>
    <div className="storybook-header">
      <div>
        <img src={LogoImage.src} alt="Logo" width={70} />
        <h1>SmartQA - Component testing with Storybook</h1>
      </div>

      <div>
        <div style={{ marginTop: '10px', marginRight: '10px' }}>
          <img src={MeetupImage.src} alt="Meetup" width={150} />
        </div>
      </div>
    </div>
  </header>
);