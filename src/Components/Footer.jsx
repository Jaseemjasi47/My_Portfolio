import React from 'react'

function Footer() {
    return (
        <div className="footer p-1">
          <div className="text-center">Reach Out Me</div>
          <div className='around p-1'>
            <div className=''>
            <a href="https://www.linkedin.com/in/mohammad-jaseem-k-j-8b150422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img className="img-30" src="Img/linkedin.png"  alt="LinkedIn" />
              </a>
            </div>
            <div className='i-n' >
            <a href="https://github.com/Jaseemjasi47" target="_blank" rel="noopener noreferrer">
              <img  className="img-30" src="Img/github.png" alt="GitHub" />
              </a>
            </div>
            <div className='i-n' >
            <a href="https://www.instagram.com/jaseemjasijs?igsh=dGtobGg5OHduczQw" target="_blank" rel="noopener noreferrer">
              <img className="img-30" src="Img/instagram.png" alt="Instagram" />
              </a>
            </div>
            <div className='i-n'>
            <a href="https://youtube.com/@jaseemjasijs?si=poCMzWNs2g9WMayz" target="_blank" rel="noopener noreferrer">
              <img className="img-30" src="Img/youtube.png" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
  )
}

export default Footer
