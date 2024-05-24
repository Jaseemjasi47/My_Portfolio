import React, { useEffect, useState } from 'react';

function LightingText() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            let progress;

            if (window.innerWidth < 800) {
                // Calculations for small screens
                progress = ((scrollPosition - 550 + (windowHeight - 500)) / (documentHeight - 1500)) * 100;
            } else {
                // Calculations for larger screens
                progress = ((scrollPosition - 550  + (windowHeight )) / (documentHeight )) * 180;
            }

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const text = "To solve modern business \nchallenges, We have fresh ideas,\ninnovation tools, and a different \noutlook on creativity.";

    const renderText = () => {
        const letters = text.split('');
        return letters.map((letter, index) => (
            <span key={index} className={`tosolve-text ${index <= scrollProgress ? 'active' : ''}`}>{letter}</span>
        ));
    };

    return (
        <div className='tosolve-container'>
            {renderText()}
        </div>
    );
}

export default LightingText;
