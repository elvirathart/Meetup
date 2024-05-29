import React from 'react';
// import './header.css';
import LogoImage from '../../assets/Logo.png';
import MeetupImage from '../../assets/meetup.png';

export const Header = () => (
  <header>
    <div className="storybook-header">
      <div>
        <img src={LogoImage.src} alt="Logo" width={32} height={32} />
        <h1>SmartQA - Storybook</h1>
      </div>

      <div>
        <div style={{ marginTop: '10px', marginRight: '10px' }}>
          <img src={MeetupImage.src} alt="Meetup" width={100} />
        </div>
      </div>
    </div>
  </header>
);