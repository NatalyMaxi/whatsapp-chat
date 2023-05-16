import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useState, useEffect } from 'react';
import Authorization from '../Authorization/Authorization';
import ChatPage from '../ChatPage/ChatPage';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/chat'
          element={<ChatPage />}
        />
        <Route
          path='/'
          element={<Authorization />}
        />
      </Routes>
    </CurrentUserContext.Provider>

  );
}

export default App;
