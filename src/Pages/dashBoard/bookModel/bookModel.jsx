/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { getText } from '../dashboards';
import { getChapter } from '../dashboards';
import { Link } from 'react-router-dom';
import CustomTabs from './bookModel2';
import { customStylesForBookModal } from '../dashboards';
import { SaveBookToLocalStorage } from '../../../hooks/book.hook';
import start from '../../../Images/Icons/Star 4.svg';
import openBook from '../../../Images/Icons/open-book-book_svgrepo.com.svg';
import timer from '../../../Images/Icons/timer.svg';
import  british from '../../../Images/Icons/british-indian-ocean-territory_svgrepo.com.svg'
import leading from '../../../Images/Icons/Leading Icon (1).svg';
import listen from '../../../Images/Icons/listen.svg'

const BookModal = ({ isOpen, onRequestClose, book }) => {
  const [text, setText] = useState('');
  // const [chapter, setChapter] = useState('');
  const [hours, setHours] = useState('');
  const [rating, setRating] = useState('');
  const { setBookDetails } = SaveBookToLocalStorage();

  const handleGetChapter = (text) => {
    const response = getChapter(text);
    // setChapter(response);
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
      <div className="mt-1 overflow-y-scroll h-screen">
        <div
          className="ml-52 text-white text-opacity-45 font-inter text-3xl font-thin mb-3 cursor-pointer"
          onClick={onRequestClose}
        >
          <p className="ml-96">X</p>
        </div>
        <div className="flex h-1/5">
          <div className="mr-3">
            {book.formats && book.formats['image/jpeg'] && (
              <img
                src={book.formats['image/jpeg']}
                alt={book.title}
                className="mb-2 w-full h-56"
              />
            )}
          </div>
          <div className="w-3/4">
            <h1 className="text-white font-inter text-base font-semibold ">
              {book.title}
            </h1>
            <span>
              {book.authors && book.authors.length > 0 && (
                <span className="text-customTextColor font-inter font-medium text-sm">
                  {book.authors[0].name}
                </span>
              )}
            </span>
            <div className="flex mt-2">
              <span className="flex-1">
                <span className="flex">
                  <img
                    src={start}
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
                    src={openBook}
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
                    src={timer}
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
                    src={british}
                    alt="Flag"
                    className="w-4 h-4 mt-1"
                  />
                </span>
                <p className="text-customTextColor text-sm">Language</p>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="bg-white w-80 h-2 rounded-md mt-2 mb-1"></div>
              <p className="mt-4 text-base font-inter text-customTextColor">
                0%
              </p>
            </div>
            <div className=" flex gap-4">
              <Link to={'/read-book'}>
                <span className="flex  bg-secondaryColor text-[#AE8138]  w-36 h-10 justify-center items-center rounded gap-2 cursor-pointer">
                  <img src={leading} alt="Read Icon" />
                  <p className="font-inter">Read Book</p>
                </span>
              </Link>
              <span className="flex  border border-secondaryColor gap-3  w-36 h-10 items-center  justify-center rounded cursor-pointer">
                <img
                  src={listen}
                  alt="Listen Icon"
                  // className="w-5 h-5"
                />
                <p className="text-[#AE8138] font-inter ">
                  Listen
                </p>
              </span>
              <span className=" cursor-pointer flex justify-center items-center">
                <p className="ml-10  font-inter font-semibold text-[#AE8138]">
                  Download
                </p>
              </span>
            </div>
          </div>
        </div>
        <div>
         <CustomTabs/>
        </div>
      </div>
    </Modal>
  );
};

export default BookModal;
