import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Authorization from '../Authorization/Authorization';
import ChatPage from '../ChatPage/ChatPage';
import PageNotFound from '../PageNotFound/PageNotFound';
import api from '../../utils/api';

function App() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [userContacts, setUserContacts] = useState([]);
  const [chatContent, setChatContent] = useState(false);
  const [chatId, setChatId] = useState('');
  const [searchText, setSearchText] = useState('');
  const [intervalDescriptor, setIntervalDescriptor] = useState();

  // Авторизуемся
  const handleGetCredentials = (data) => {
    localStorage.setItem('apiTokenInstance', data.apiTokenInstance);
    localStorage.setItem('idInstance', data.idInstance);
    api.getUserInfo(data.idInstance, data.apiTokenInstance)
      .then((data) => {
        navigate('/chat')
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  // Получим контакты пользователя
  useEffect(() => {
    const idInstance = localStorage.getItem('idInstance');
    const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    if (!idInstance || !apiTokenInstance) {
      return;
    }
    api.getUserContact(idInstance, apiTokenInstance)
      .then((userContact) => {
        setUserContacts(userContact)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [])

  // Отправим сообщение
  const handleAddMessageSubmit = (data) => {
    const idInstance = localStorage.getItem('idInstance');
    const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    if (!idInstance || !apiTokenInstance) {
      return;
    }
    api.addMessage(data, chatId, idInstance, apiTokenInstance)
      .then(() => {
        console.log('сообщение отправлено')
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  };

  // По клику на контакт добавим чат с контактом, осуществляется проверка входищих уведомлений от контакта

  const addChat = (id) => {
    setChatId(id)
    setChatContent(true)
    setMessages([]);

    clearInterval(intervalDescriptor)

    const getMessage = setInterval(() => {
      const idInstance = localStorage.getItem('idInstance');
      const apiTokenInstance = localStorage.getItem('apiTokenInstance');
      api.getNotification(idInstance, apiTokenInstance)
        .then((data) => {
          if (data === null) {
            return
          } else if (!data.body.hasOwnProperty('messageData')) {
            api.deleteNotification(data.receiptId, idInstance, apiTokenInstance)
          } else {
            let date = new Date();
            setMessages(prevState => ([...prevState, { time: date.toLocaleTimeString(), ...data.body.messageData }]))
            api.deleteNotification(data.receiptId, idInstance, apiTokenInstance)
          }

        }).catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    }, 6000)
    setIntervalDescriptor(getMessage)
  }

  const onSearch = (text) => {
    setSearchText(text)
  }

  return (
    <Routes>
      <Route
        path='/chat'
        element={<ChatPage
          onAddMessage={handleAddMessageSubmit}
          messages={messages}
          userContacts={userContacts}
          addChat={addChat}
          searchText={searchText}
          onSearch={onSearch}
          chatContent={chatContent}
        />}
      />
      <Route
        path='/auth'
        element={<Authorization
          onGetCredentials={handleGetCredentials}
        />}
      />
      <Route
        path='/'
        element={<Navigate to='/auth' replace />}
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
