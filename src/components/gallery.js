import React, { useState, useEffect } from 'react';
import { 
  BiPlayCircle, 
  BiPauseCircle 
} from "react-icons/bi";
import { 
  IoChevronBackOutline, 
  IoChevronForwardOutline 
} from "react-icons/io5";

// Import static images
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';

// Static images array
const images = [
  {
    src: img9,
    title: 'Blood Donation Awareness',
    alt: 'Blood donation awareness campaign',
    filename: 'img1.jpg'
  },
  {
    src: img10,
    title: 'Joy of Giving',
    alt: 'Happy donor after giving blood',
    filename: 'img2.jpg'
  },
  {
    src: img11,
    title: 'Community Spirit',
    alt: 'Group of donors showing community spirit',
    filename: 'img3.jpg'
  },
  {
    src: img12,
    title: 'Together We Can',
    alt: 'Blood donation drive - together we can save lives',
    filename: 'img4.jpg'
  },
  {
    src: img13,
    title: 'Life Saver Camp',
    alt: 'Blood donation camp saving lives',
    filename: 'img5.jpg'
  },
  {
    src: img14,
    title: 'Helping Hands',
    alt: 'Volunteers helping at donation camp',
    filename: 'img6.jpg'
  },
  {
    src: img15,
    title: 'The Gift of Life',
    alt: 'Donor giving the gift of life',
    filename: 'img7.jpg'
  },
  {
    src: img16,
    title: 'Caring Professionals',
    alt: 'Medical staff assisting blood donor',
    filename: 'img8.jpg'
  },
  {
    src: img1,
    title: 'Compassionate Care',
    alt: 'Compassionate care during blood donation',
    filename: 'img9.jpg'
  },
  {
    src: img2,
    title: 'Unity in Service',
    alt: 'Unity in service - blood donation drive',
    filename: 'img10.jpg'
  },
  {
    src: img3,
    title: 'Heroes Among Us',
    alt: 'Everyday heroes donating blood',
    filename: 'img11.jpg'
  },
  {
    src: img4,
    title: 'Save Lives Together',
    alt: 'Community coming together to save lives',
    filename: 'img12.jpg'
  },
  {
    src: img5,
    title: 'Blood Drive Success',
    alt: 'Successful blood donation drive',
    filename: 'img13.jpg'
  },
  {
    src: img6,
    title: 'Donors Making Impact',
    alt: 'Blood donors making a real impact',
    filename: 'img14.jpg'
  },
  {
    src: img7,
    title: 'Medical Excellence',
    alt: 'Medical excellence in blood collection',
    filename: 'img15.jpg'
  },
  {
    src: img8,
    title: 'Hope and Healing',
    alt: 'Bringing hope and healing through donation',
    filename: 'img16.jpg'
  }
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [popUp, setPopUp] = useState(false);

  // Auto-play slideshow
  useEffect(() => {
    let interval;

    if (autoPlay && images.length > 0) {
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay]);

  // Keyboard navigation for popup
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (popUp && images.length > 0) {
        switch(e.key) {
          case 'Escape':
            setPopUp(false);
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
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

  // Navigation functions
  const nextImage = () => {
    if (images.length > 0) {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 0) {
      setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

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
            onClick={() => setPopUp(true)}
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
        
        <button className="nav-button next" onClick={nextImage}>
          <IoChevronForwardOutline />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={image.filename}
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
              
              <button className="popup-nav next" onClick={nextImage}>
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
                  key={image.filename}
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