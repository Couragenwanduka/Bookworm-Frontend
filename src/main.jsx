import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './hooks/action.jsx';
import { BookProvider } from './hooks/book.hook.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </UserProvider>
  </React.StrictMode>
);
