import React, { useState } from 'react';
import { 
  BiCaretRightCircle, 
  BiCaretLeftCircle, 
  BiPlayCircle, 
  BiPauseCircle 
} from "react-icons/bi";
import { 
  IoChevronBackOutline, 
  IoChevronForwardOutline 
} from "react-icons/io5";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [popUp, setPopUp] = useState(false);


  React.useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay]);

  // Keyboard navigation for popup
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (popUp) {
        switch(e.key) {
          case 'Escape':
            setPopUp(false);
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextToImage();
            break;
          case ' ':
            e.preventDefault();
            setAutoPlay(!autoPlay);
            break;
          default:
            break;
        }
      }
    };

    if (popUp) {
      window.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [popUp, autoPlay]);

  const images = [
    {
      src: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful mountain landscape',
      title: 'Mountain Vista'
    },
    {
      src: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Rolling green hills',
      title: 'Green Hills'
    },
    {
      src: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ocean sunset',
      title: 'Ocean Sunset'
    },
    {
      src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Forest path',
      title: 'Forest Trail'
    },
    {
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Desert landscape',
      title: 'Desert Dunes'
    }
  ];

 const nextToImage = ()=>{
    setCurrentImage((prevIndex) => (prevIndex+1)%images.length);

 }
 const prevImage =()=>{
    setCurrentImage((prevIndex)=>(prevIndex-1+images.length) % images.length);
 }
    const goToImage = (index) => {
      setCurrentImage(index);
  };


  return (
    <div className="gallery-container" id="gallery">
      <h2>Blood Donation Gallery</h2>
      <p className="gallery-subtitle">Capturing moments of hope, compassion, and life-saving donations</p>
      
      <div className="main-image-container">
        <button className="nav-button prev" onClick={prevImage}>
          <IoChevronBackOutline />
        </button>

        <div className="image-wrapper">
          <img 
            src={images[currentImage].src} 
            alt={images[currentImage].alt}
            className="main-image"
            onClick={() => {
              setPopUp(true);
            }}
          />
          <div className="image-info">
            <h3>{images[currentImage].title}</h3>
            <div className="image-controls">
              <span className="image-counter">{currentImage + 1} / {images.length}</span>
              <button 
                className="autoplay-button" 
                onClick={() => setAutoPlay(!autoPlay)}
                title={autoPlay ? "Pause slideshow" : "Play slideshow"}
              >
                {autoPlay ? <BiPauseCircle /> : <BiPlayCircle />}
              </button>
            </div>
          </div>
        </div>
        
        <button className="nav-button next" onClick={nextToImage}>
          <IoChevronForwardOutline />
        </button>
      </div>

    
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {popUp && (
        <div className="popup-overlay" onClick={() => setPopUp(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setPopUp(false)}>
              ×
            </button>
            
            <div className="popup-image-container">
              <button className="popup-nav prev" onClick={prevImage}>
                <IoChevronBackOutline />
              </button>
              
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt}
                className="popup-image"
              />
              
              <button className="popup-nav next" onClick={nextToImage}>
                <IoChevronForwardOutline />
              </button>
            </div>
            
            <div className="popup-info">
              <h3>{images[currentImage].title}</h3>
              <p>{images[currentImage].alt}</p>
              <div className="popup-controls">
                <span className="popup-counter">{currentImage + 1} / {images.length}</span>
                <button 
                  className="popup-autoplay" 
                  onClick={() => setAutoPlay(!autoPlay)}
                  title={autoPlay ? "Pause slideshow" : "Play slideshow"}
                >
                  {autoPlay ? <BiPauseCircle /> : <BiPlayCircle />}
                </button>
              </div>
            </div>
            
            <div className="popup-thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`popup-thumbnail ${index === currentImage ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
