/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd';
import { useState } from 'react';
import BookModal from "./bookModel/bookModel.jsx";

const ItemType = 'ITEM';

const DraggableBook = ({ book }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { book },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const getStyles = (isDragging) => ({
    opacity: isDragging ? 0.5 : 1,
    transform: isDragging ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s ease',
  });

  const handleBookClick = (book) => {
    setSelectedBook(book)
    setIsBookModalOpen(true);
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false);
  };
  return (
    <div ref={drag} style={getStyles(isDragging)} className="flex flex-col items-center text-center w-full h-11/12">
      <div>
        {book.formats['image/jpeg'] && (
          <img src={book.formats['image/jpeg']} alt={book.title} className="rounded-lg mb-2 w-11/12 h-10/12" onClick={() => handleBookClick(book)} />
        )}
      </div>
      <BookModal
        isOpen={isBookModalOpen}
        onRequestClose={closeBookModal}
        book={selectedBook}
      />
      <div className='flex flex-col justify-center'>
        <p className="text-white font-semibold text-warp inline-block w-36 text-base truncate hover:whitespace-normal">{book.title}</p>
        {book.authors && book.authors.length > 0 && (
          <p className="text-white text-opacity-35 text-warp inline-block w-40 text-sm">{book.authors[0].name}</p>
        )}
      </div>
    </div>
  );
};

export default DraggableBook;





