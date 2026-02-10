import { useEffect } from 'react';
import './Summary.css';

function Summary() {
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('visible');
      }, index * 30);
    });
  }, []);

  const text = `Two years ago, my life changed for the better.
These past 730 days have been filled with so much laughter, growth, and love.
I'm so grateful for every moment we've shared and everything we've built together.
Here's to us and to many more years of adventures. Happy 2nd Anniversary! ❤️`;


  return (
    <div className="summary">
      <div className="panda-dance">
        <span className="panda">🐼</span>
        <span className="panda">🐼</span>
      </div>

      <div className="summary-container">
        <div className="heart-decoration top-left">💕</div>
        <div className="heart-decoration top-right">💖</div>
        <div className="heart-decoration bottom-left">💗</div>
        <div className="heart-decoration bottom-right">💝</div>

        <h1 className="summary-title">Our Love Story</h1>
        
        <div className="summary-content">
          <p className="animated-text">
            {text.split('').map((char, index) => (
              <span key={index} className="letter">
                {char}
              </span>
            ))}
          </p>
        </div>

        <div className="panda-couple">
          <span className="panda-heart">🐼❤️🐼</span>
        </div>
      </div>

      <div className="wave-decoration">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#ffe0e9" opacity="0.5"/>
          <path d="M0,20 C200,80 400,20 600,70 C800,120 1000,40 1200,80 L1200,120 L0,120 Z" fill="#ffc3d5" opacity="0.7"/>
        </svg>
      </div>
    </div>
  );
}

export default Summary;
