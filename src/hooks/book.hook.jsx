/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // Load initial user details from local storage
  const initialUserDetails = localStorage.getItem('bookDetails') ? JSON.parse(localStorage.getItem('bookDetails')) : '';

  const [bookDetails, setBookDetails] = useState(initialUserDetails);

  useEffect(() => {
    // Save user details to local storage whenever they change
    localStorage.setItem('BookDetails', JSON.stringify(bookDetails));
  }, [bookDetails]);

  return (
    <BookContext.Provider value={{ bookDetails, setBookDetails }}>
      {children}
    </BookContext.Provider>
  );
};

export const SaveBookToLocalStorage = () => useContext(BookContext);
