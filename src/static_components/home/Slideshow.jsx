import React, { useState, useEffect } from 'react';
import './../../styles/home/slideshow.css'; // Import the separate CSS file

const Slideshow = () => {
  // Array of slide data
  const slides = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1015/1920/1080',
      alt: 'Mountain landscape'
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/104/1920/1080',
      alt: 'Waterfall'
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/106/1920/1080',
      alt: 'Flowers'
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/id/15/1920/1080',
      alt: 'Forest path'
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/id/29/1920/1080',
      alt: 'Coastal view'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const startTransition = (newIndex, newDirection) => {
    if (isTransitioning) return;
    
    setDirection(newDirection);
    setNextIndex(newIndex);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setIsTransitioning(false);
    }, 600);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    startTransition(newIndex, 'prev');
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    startTransition(newIndex, 'next');
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div className="slides-container">
          {/* Current slide */}
          <div 
            className={`slide current ${isTransitioning ? `exiting-${direction}` : ''}`}
          >
            <img 
              src={slides[currentIndex].imageUrl} 
              alt={slides[currentIndex].alt}
              className="slide-image"
            />
          </div>
          
          {/* Next/Previous slide during transition */}
          {nextIndex !== null && (
            <div className={`slide entering ${direction}`}>
              <img 
                src={slides[nextIndex].imageUrl} 
                alt={slides[nextIndex].alt}
                className="slide-image"
              />
            </div>
          )}
        </div>

        {/* Static gradient overlay */}
        <div className="gradient-overlay"></div>

        {/* Static text overlay */}
        <div className="text-overlay">
          <span className="example-text">example</span>
        </div>

        {/* Navigation arrows */}
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                const newDirection = index > currentIndex ? 'next' : 'prev';
                startTransition(index, newDirection);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;