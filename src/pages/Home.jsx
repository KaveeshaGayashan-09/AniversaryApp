import { useEffect } from 'react';
import './Home.css';

// Import images
import img1 from '../assets/images/IMG_2040.jpg';
import img2 from '../assets/images/IMG_3471.JPG';
import img3 from '../assets/images/IMG_3995.JPG';
import img4 from '../assets/images/IMG_4375.JPG';
import img5 from '../assets/images/IMG_7188.JPG';
import img6 from '../assets/images/IMG_6820.JPG';

function Home() {
  // Gallery data array
  const galleryItems = [
    {
      id: 1,
      image: img1,
      icon: '🐼💕',
      title: 'First Date',
      description: 'The moment our eyes first met, I knew you were special'
    },
    {
      id: 2,
      image: img2,
      icon: '🐼❤️',
      title: 'Adventure Together',
      description: 'Every adventure with you is a treasure I hold dear'
    },
    {
      id: 3,
      image: img3,
      icon: '🐼💖',
      title: 'Happy Moments',
      description: 'Your smile lights up my world in ways I never imagined'
    },
    {
      id: 4,
      image: img4,
      icon: '🐼💗',
      title: 'Celebrations',
      description: 'Celebrating every milestone of our beautiful journey'
    },
    {
      id: 5,
      image: img5,
      icon: '🐼💝',
      title: 'Forever Love',
      description: 'With you, forever feels like just the beginning'
    },
    {
      id: 6,
      image: img6,
      icon: '🐼💞',
      title: 'Our Future',
      description: 'Building dreams and making memories, one day at a time'
    }
  ];

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
    <div className="home">
      <div className="floating-hearts">
        <span className="heart">❤️</span>
        <span className="heart">💕</span>
        <span className="heart">💖</span>
        <span className="heart">💗</span>
        <span className="heart">💝</span>
      </div>

      <section className="hero">
        <div className="panda-decoration left">🐼</div>
        <div className="panda-decoration right">🐼</div>
        <h1 className="hero-title fade-in">Our Beautiful Love Story</h1>
        <p className="hero-subtitle fade-in">A Journey of Two Hearts Beating as One</p>
      </section>

      <section className="gallery">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item fade-in">
            <div className="image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="gallery-image"
              />
              <div className="image-overlay">
                <span className="panda-icon">{item.icon}</span>
                <p className="image-placeholder-text">{item.title}</p>
              </div>
            </div>
            <p className="image-description">{item.description}</p>
          </div>
        ))}
      </section>

      <div className="panda-footer">
        <span className="panda-teddy">🧸🐼🧸</span>
      </div>
    </div>
  );
}

export default Home;

