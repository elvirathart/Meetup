import React from 'react';
import './header.css';
import Image from 'next/image';
import LogoOnly from './assets/LogoOnly.png';
import MeetupImage from './assets/meetup-logo.png';


export const Header = () => (
  <header>
    <div className="storybook-header">
      <div>
        <Image src={LogoOnly} alt="Logo" width={32} height={32} />
        <h1>SmartQA - Storybook</h1>
      </div>

      <div>
      <div style={{ marginTop: '10px', marginRight: '10px' }}>
              <Image src={MeetupImage} alt="Meetup" width={100} />
            </div>
      </div>
    </div>
  </header>
);
