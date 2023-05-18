import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React, { useState, useEffect } from 'react';
import Authorization from '../Authorization/Authorization';
import ChatPage from '../ChatPage/ChatPage';
import api from '../../utils/api';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState('');
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    const idInstance = localStorage.getItem('idInstance');
    const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    if (!idInstance || !apiTokenInstance) {
      return;
    }
    api.getUserContact(idInstance, apiTokenInstance)
      .then((userContact) => {
        // console.log(userContact)
        setUserContacts(userContact)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [])

  const handleGetCredentials = (data) => {
    setCurrentUser(data)
    localStorage.setItem('apiTokenInstance', data.apiTokenInstance);
    localStorage.setItem('idInstance', data.idInstance);
    api.getUserInfo(data.idInstance, data.apiTokenInstance)
      .then((data) => {
        setUserId(data.wid)
        localStorage.setItem('wid', data.wid);
        navigate('/chat')
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  const handleAddMessageSubmit = (data) => {
    const idInstance = localStorage.getItem('idInstance');
    const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    if (!idInstance || !apiTokenInstance) {
      return;
    }
    // api.addMessage(data, idInstance, apiTokenInstance)
    //   .then((newMessage) => {
    //     setMessages([newMessage, ...messages]);

    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка: ${err}`);
    //   })
    //   .finally(() => {
    //   })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path='/chat'
          element={<ChatPage
            onAddMessage={handleAddMessageSubmit}
            messages={messages}
            userContacts={userContacts}
          />}
        />
        <Route
          path='/'
          element={<Authorization
            onGetCredentials={handleGetCredentials}
          />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
