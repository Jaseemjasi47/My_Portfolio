import React from 'react';

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
  <h1>Discover the World I Create</h1>
   <p>
    Greetings! I'm a full-stack developer with a passion for crafting exceptional software solutions. As a skilled
    photographer and editor, I capture and enhance moments with authenticity and visual allure.
  </p>
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
