import  { useState, useEffect,  } from 'react';


const ResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: 'src/assets/Ellipse 22 (2).png',
      text: 'Bookworm has revolutionized how I study. The AI summarization feature is a game-changer!',
      author: 'Rachael D.',
    },
    {
      img: 'src/assets/Ellipse 22 (3).png',
      text: 'As an avid reader, I\'ve tried many ebook readers, but this one stands out. The AI summary feature is a game-changer – perfect for when I want a quick overview of a book before diving in.',
      author: 'John C.',
    },
    {
      img: 'src/assets/Ellipse 22 (4).png',
      text: 'I\'m so impressed with this ebook reader! Not only is it user-friendly, but it also has an extensive library of books to choose from. I love being able to see reviews from other readers before deciding on a book.',
      author: 'Emily R.',
    },
    {
      img: 'src/assets/Ellipse 22 (5).png',
      text: 'Absolutely love this ebook reader! The interface is intuitive, the selection of books is fantastic, and the ability to customize settings makes reading a breeze. Highly recommend!',
      author: 'Sarah R.',
    },
    {
      img: 'src/assets/Ellipse 22 (6).png',
      text: 'I can\'t say enough good things about this Bookworm! It\'s easy to use, has a wide selection of books, and the AI summary feature is incredibly helpful.',
      author: 'James L.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={slide.img} alt="Testimonial" />
            <p>{slide.text}</p>
            <p>- {slide.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveSlider;
