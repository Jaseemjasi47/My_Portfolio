import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    const introductionStyle = {
        fontFamily: 'Courier New, monospace', // Change the font-family to Courier New with a fallback to monospace
        color: 'white',
        textAlign: 'center',
        padding: '50px',
        fontSize: '24px',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      };
  return (
    <div style={introductionStyle}>
      <h2>Hey Guys It's Me Jaseem</h2>
      <TypeAnimation
      sequence={[
        'Discover the World I Create!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ textAlign: 'center',
      padding: '10px 50px',
      fontSize: '24px', display: 'inline-block', fontFamily: 'Courier New, monospace', color: 'white' }}
      repeat={Infinity}
    />
  {/* <h2>Discover the World I Create</h2> */}
   <h6>
    Greetings! I'm a full-stack developer with a passion for crafting exceptional software solutions. As a skilled
    photographer and editor, I capture and enhance moments with authenticity and visual allure.
  </h6>
  {/*
  <p>
    My commitment extends beyond code; I seamlessly blend precision programming with the artistry of photography.
    Join me on this immersive journey where technology meets creativity, turning each project into a canvas for
    expression and functionality.
  </p> */}
</div>


  );
};

export default Introduction;
