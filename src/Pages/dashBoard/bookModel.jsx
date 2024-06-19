/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { getText } from './dashboards';
import { getChapter } from './dashboards';
import { Link } from 'react-router-dom';
import { customStylesForBookModal } from './dashboards';
import { SaveBookToLocalStorage } from '../../hooks/book.hook';

const BookModal = ({ isOpen, onRequestClose, book }) => {
  const [text, setText] = useState('');
  const [chapter, setChapter] = useState('');
  const [hours, setHours] = useState('');
  const [rating, setRating] = useState('');
  const { setBookDetails } = SaveBookToLocalStorage();

  const handleGetChapter = (text) => {
    const response = getChapter(text);
    setChapter(response);
    if (response.length >= 10) {
      setHours('15hrs');
    } else {
      setHours('5hrs');
    }
    if (book.download_count >= 1500) {
      setRating('5');
    } else if (book.download_count >= 1000) {
      setRating('4');
    } else if (book.download_count <= 990) {
      setRating('3');
    }
  };

  useEffect(() => {
    const handleGetText = async () => {
      try {
        if (book) {
          const response = await getText(book.formats['text/html']);
          setText(response.text);
          setBookDetails(book);
        }
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };

    handleGetText();
    handleGetChapter(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book, text]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Modal"
      ariaHideApp={false}
      style={customStylesForBookModal}
    >
      <div className="mt-2">
        <div
          className="ml-52 text-customTextColor font-inter text-2xl mb-3 cursor-pointer"
          onClick={onRequestClose}
        >
          <p className="ml-96">X</p>
        </div>
        <div className="flex h-2/5">
          <div className="mr-3">
            {book.formats && book.formats['image/jpeg'] && (
              <img
                src={book.formats['image/jpeg']}
                alt={book.title}
                className="mb-2 w-full h-full"
              />
            )}
          </div>
          <div className="w-3/4">
            <h1 className="text-white font-inter text-xl font-semibold mb-2">
              {book.title}
            </h1>
            <span>
              {book.authors && book.authors.length > 0 && (
                <span className="text-customTextColor font-inter font-medium text-sm">
                  {book.authors[0].name}
                </span>
              )}
            </span>
            <div className="flex mt-10">
              <span className="flex-1">
                <span className="flex">
                  <img
                    src="src/assets/Star 4.png"
                    alt="Star"
                    className="w-4 h-4 mt-1"
                  />
                  <p className="text-customTextColor font-inter text-md ml-2">
                    {rating}
                  </p>
                </span>
                <p className="text-customTextColor text-sm ">Rating</p>
              </span>
              <span className="flex-1">
                <span className="flex">
                  <img
                    src="src/assets/Group (1).png"
                    alt="Group"
                    className="w-4 h-4 mt-1"
                  />
                  <p className="text-customTextColor font-inter text-md ml-2">
                    {book.download_count}
                  </p>
                </span>
                <p className="text-customTextColor text-sm ">Pages</p>
              </span>
              <span className="flex-1">
                <span className="flex">
                  <img
                    src="src/assets/timer.png"
                    alt="Timer"
                    className="w-4 h-4 mt-1"
                  />
                  <p className="text-customTextColor font-inter text-md ">
                    {hours}
                  </p>
                </span>
                <p className="text-customTextColor text-sm">Reading Time</p>
              </span>
              <span className="flex-1">
                <span>
                  <img
                    src="src/assets/british-indian-ocean-territory_svgrepo.com.png"
                    alt="Flag"
                    className="w-4 h-4 mt-1"
                  />
                </span>
                <p className="text-customTextColor text-sm">Language</p>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="bg-white w-80 h-2 rounded-md mt-5"></div>
              <p className="mt-4 text-base font-inter text-customTextColor">
                0%
              </p>
            </div>
            <div className="mt-2 flex">
              <Link to={'/read-book'}>
                <span className="flex flex-1 bg-customYellow p-3 rounded gap-2 cursor-pointer">
                  <img src="src/assets/Leading Icon.png" alt="Read Icon" />
                  <p className="font-inter font-semibold">Read Book</p>
                </span>
              </Link>
              <span className="flex flex-1 border border-customYellow ml-3 items-center rounded cursor-pointer">
                <img
                  src="src/assets/Leading Icon (2).png"
                  alt="Listen Icon"
                  className="w-7 h-7 ml-3"
                />
                <p className="text-customYellow font-inter font-semibold ml-2">
                  Listen
                </p>
              </span>
              <span className="flex-1 cursor-pointer">
                <p className="ml-10 mt-3 font-inter font-semibold text-customYellow">
                  Download
                </p>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Modal>
  );
};

export default BookModal;
