/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Load initial user details from local storage
  const initialUserDetails = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : '';

  const [userDetails, setUserDetails] = useState(initialUserDetails);

  useEffect(() => {
    // Save user details to local storage whenever they change
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }, [userDetails]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
