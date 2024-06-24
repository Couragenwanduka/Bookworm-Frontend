import { createContext, useContext, useState, useEffect } from "react";


const ReadBookContext = createContext();

// eslint-disable-next-line react/prop-types
export const BookProvider = ({ children }) => {

  const initialReadBook = localStorage.getItem('readBookDetails') ? JSON.parse(initialReadBook) : '';

  const [readBookDetails, setReadBookDetails] = useState(initialReadBook);

  useEffect(() => {
   localStorage.setItem('ReadBookDetails',  JSON.stringify(readBookDetails))
  }, [readBookDetails]);

  return (
    <ReadBookContext.Provider value={{ readBookDetails, setReadBookDetails }}>
      {children}
    </ReadBookContext.Provider>
  );
};

export const UseBook = () => useContext(ReadBookContext);
