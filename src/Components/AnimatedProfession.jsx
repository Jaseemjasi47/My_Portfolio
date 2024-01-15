import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedProfession = () => {
  return (
    <div className='animation-box'>
    <TypeAnimation
      sequence={[
        'My commitment extends beyond code; I seamlessly blend precision programming with the artistry of photography. Join me on this immersive journey where technology meets creativity, turning each project into a canvas for expression and functionality.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ textAlign: 'center',
      padding: '10px 50px',
      fontSize: '14px', display: 'inline-block', fontFamily: 'Courier New, monospace', color: 'white' }}
      repeat={Infinity}
      />
      </div>
  );
};

export default AnimatedProfession;
