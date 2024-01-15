import React from 'react';
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <div className="title">Reach Out Me</div>
      <div className='icons'>
        <div className='i-n'>
        <a href="https://www.linkedin.com/in/mohammad-jaseem-k-j-8b150422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="Img/linkedin.png" alt="LinkedIn" />
          </a>
          <div className="icon-name">Mohammad Jaseem K J</div>
        </div>
        <div className='i-n' >
        <a href="https://github.com/Jaseemjasi47" target="_blank" rel="noopener noreferrer">
          <img  className="icon" src="Img/github.png" alt="GitHub" />
          </a>
          <div className="icon-name">Jaseemjasi47</div>
        </div>
        <div className='i-n' >
        <a href="https://www.instagram.com/jaseemjasijs?igsh=dGtobGg5OHduczQw" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="Img/instagram.png" alt="Instagram" />
          </a>
          <div className="icon-name">@jaseemjasijs</div>
        </div>
        <div className='i-n'>
        <a href="https://youtube.com/@jaseemjasijs?si=poCMzWNs2g9WMayz" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="Img/youtube.png" alt="YouTube" />
          </a>
          <div className="icon-name">@jaseemjasijs</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;

