import React, { useState, useEffect } from "react";

function ProjectCard({ title, imageUrl, link }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.project-card');
      if (!element) return;

      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const isVisible = elementTop < windowHeight / 2 + scrollPosition - 100;

      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`project-card m-1 ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="card-content">
        <div className="around">
          <div className="centre">
            <h2>{title}</h2>
          </div>
          <img src={imageUrl} alt={title} className="img-50" />
        </div>
        {/* <p className="text-center py-1">Description here.</p> */}
        <div className="around">
          <div className="btn-view">View More</div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            <div className="btn-view">Visit Site</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
