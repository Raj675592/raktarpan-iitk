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
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';

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
      src: img5,
      alt: 'Blood donation camp',
      title: 'Life Saver Camp'
    },
    {
      src: img6,
      alt: 'Volunteers at donation camp',
      title: 'Helping Hands'
    },
    {
      src: img7,
      alt: 'Donor giving blood',
      title: 'The Gift of Life'
    },
    {
      src: img8,
      alt: 'Medical staff assisting donor',
      title: 'Caring Professionals'
    },
    {
      src: img1,
      alt: 'Blood donation awareness',
      title: 'Spread the Word'
    },
    {
      src: img2,
      alt: 'Happy donor after giving blood',
      title: 'Joy of Giving'
    }
    ,
    {
      src: img3,
      alt: 'Group of donors',
      title: 'Community Spirit'
    },
    {
      src: img4,
      alt: 'Blood donation drive',
      title: 'Together We Can'
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
