import { useEffect } from 'react';
import './Memories.css';

// Import memory images
import memory1 from '../assets/Memories/IMG_4375.JPG';
import memory2 from '../assets/Memories/IMG_5678.JPG';
import memory3 from '../assets/Memories/IMG_9090.jpeg';
import memory5 from '../assets/Memories/IMG_7070.jpeg';
import memory6 from '../assets/Memories/IMG_2019.jpeg';

import memory4 from '../assets/Memories/IMG_7338.JPG';

function Memories() {
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

    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const memories = [
    {
      date: "February , 2024",
      title: "Our First Meeting",
      description: "The day our paths crossed and changed everything. I still remember the nervous butterflies and the instant connection we shared.",
      emoji: "💕",
      image: memory1
    },
    {
      date: "February 19, 2024",
      title: "First Trip",
      description: "The First trip day of us together",
      emoji: "💖",
      image: memory2
    },
    {
      date: "April 17, 2024",
      title: "Walking Time",
      description: "Walking hand in hand along the shore, watching the sunset paint the sky. That moment felt like a scene from a perfect dream.",
      emoji: "🌅",
      image: memory3,
    },
    {
      date: "May 10, 2024",
      title: "Surprise Picnic",   
      description: "You surprised me with a romantic picnic under the stars. It was one of the most thoughtful gestures anyone has ever done for me.",
      emoji: "🌟",
      image: memory4
    },
    {
      date: "May 25, 2024",
      title: "Birthday Together",
      description: "Celebrated the First birthday of her together",
      emoji: "🎂",
      image: memory5,
    },
    {
      date: "March 17, 2024",
      title: "Dancing in the Rain",
      description: "Who knew getting caught in the rain could be so romantic? Dancing with you in the downpour is a memory I'll treasure forever.",
      emoji: "💃",
      image: memory6,
    },
   
  ];

  return (
    <div className="memories">
      <div className="memories-header">
        <h1 className="memories-title">Our Precious Memories</h1>
        <p className="memories-subtitle">Every moment with you is a treasure 🐼💕</p>
      </div>

      <div className="timeline">
        {memories.map((memory, index) => (
          <div key={index} className={`memory-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="card-content">
              <div className="card-emoji">{memory.emoji}</div>
              <div className="card-date">{memory.date}</div>
              <h3 className="card-title">{memory.title}</h3>
              <div className="card-image">
                {memory.image ? (
                  <img 
                    src={memory.image} 
                    alt={memory.title} 
                    className="memory-image"
                  />
                ) : (
                  <div className="memory-placeholder">
                    <span className="panda-memory">🐼</span>
                  </div>
                )}
              </div>
              <p className="card-description">{memory.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>

      <div className="memories-footer">
        <div className="panda-group">
          <span>🐼</span>
          <span>❤️</span>
          <span>🐼</span>
        </div>
        <p className="footer-text">To many more beautiful memories together...</p>
      </div>
    </div>
  );
}

export default Memories;
