import { useEffect } from 'react';
import './Future.css';
import futureImage1 from '../assets/Memories/IMG_8012.jpeg';
import futureImage2 from '../assets/Memories/IMG_7617.jpeg';

function Future() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="future">
      <div className="floating-stars">
        <span className="star">⭐</span>
        <span className="star">✨</span>
        <span className="star">🌟</span>
        <span className="star">💫</span>
      </div>

      <section className="future-hero">
        <div className="panda-decoration left">🐼</div>
        <div className="panda-decoration right">🐼</div>
        <h1 className="future-title fade-in">Our Future Journey</h1>
        <p className="future-subtitle fade-in">Together, Forever & Always</p>
      </section>

      <section className="future-content">
        <div className="future-images-row fade-in">
          <div className="future-image-container">
            <img 
              src={futureImage1} 
              alt="Our Future Together" 
              className="future-image"
            />
            <div className="image-glow"></div>
          </div>
          <div className="future-image-container">
            <img 
              src={futureImage2} 
              alt="Our Beautiful Journey" 
              className="future-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="wish-container fade-in">
          <div className="heart-decoration top">💕</div>
          <div className="heart-decoration bottom">💖</div>
          
          <h2 className="wish-title">My Wish For Us</h2>
          
          <div className="wish-content">
            <p className="wish-text">
              As I look into your eyes, I see our beautiful future unfolding before us. 
              My dearest love, I wish for us to walk hand in hand through every sunrise and sunset, 
              creating new memories that will warm our hearts for years to come.
            </p>
            
            <p className="wish-text">
              I dream of adventures we'll share, laughter that will fill our home, 
              and quiet moments where just being together is enough. 
              May our love continue to grow stronger with each passing day, 
              weathering any storm and celebrating every joy.
            </p>
            
            <p className="wish-text">
              Together, we'll build a life filled with love, respect, and endless possibilities. 
              I promise to be your partner, your best friend, and your biggest supporter 
              as we chase our dreams and create our own happily ever after.
            </p>
            
            <p className="wish-signature">
              Here's to our forever journey, my love. 
              <span className="signature-hearts">🐼❤️🐼</span>
            </p>
          </div>
        </div>
      </section>

      <div className="panda-footer">
        <span className="panda-couple">🧸🐼💕🐼🧸</span>
      </div>
    </div>
  );
}

export default Future;
