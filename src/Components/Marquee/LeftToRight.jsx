import React, { useState, useEffect } from 'react';
import './MarqueeComponent.css'; 

function LeftToRight() {
    const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const initialOffset = 600; // Adjust this value to set the starting position

  return (
    <section className="marquee-container">
      <div className="marquee-content">
        <div id="theMarquee" className="marquee-text">
          <span
            style={{ transform: `translate(${scrollOffset * 1.2 - initialOffset}px, 0%)`, transition: 'transform 0.1s' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number">06+</span>
            <span className="marquee-description">Projects Launched</span>
          </span>
          <span
            style={{ transform: `translate(${scrollOffset * 1.2 - initialOffset}px, 0%)`, transition: 'transform 0.1s' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number red">02+</span>
            <span className="marquee-description">Brands Developed</span>
          </span>
          <span
            style={{ transform: `translate(${scrollOffset * 1.2 - initialOffset}px, 0%)`, transition: 'transform 0.1s' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number yellow">02+</span>
            <span className="marquee-description">Success Stories</span>
          </span>
          <span
            style={{ transform: `translate(${scrollOffset * 1.2 - initialOffset}px, 0%)`, transition: 'transform 0.1s' }}
          >
            <span className="marquee-prefix">//</span>
            <span className="marquee-number green">@</span>
            <span className="marquee-description">jaseemjasijs</span>
          </span>
          {/* Add other spans here with similar structure */}
        </div>
      </div>
    </section>
  );
};

export default LeftToRight
