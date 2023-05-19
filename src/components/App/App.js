import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Authorization from '../Authorization/Authorization';
import ChatPage from '../ChatPage/ChatPage';
import api from '../../utils/api';

function App() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [userContacts, setUserContacts] = useState([]);
  const [chatContent, setChatContent] = useState(false);
  const [chatId, setChatId] = useState('');
  const [searchText, setSearchText] = useState('');
  let interval

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

  // Отправим сообщение
  const handleAddMessageSubmit = (data) => {
    const idInstance = localStorage.getItem('idInstance');
    const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    if (!idInstance || !apiTokenInstance) {
      return;
    }
    setMessages([{ textMessage: data.message, type: 'outgoing' }, ...messages]);
    // api.addMessage(data, chatId, idInstance, apiTokenInstance)
    //   .then(() => {
    //     setMessages([{ textMessage: data.message, type: 'outgoing' }, ...messages]);

    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка: ${err}`);
    //   })
    //   .finally(() => {
    //   })
  };

  // По клику на контакт добавим чат с контактом, осуществляется проверка входищих уведомлений от контакта
  const addChat = (id) => {
    setChatId(id)
    setChatContent(true)
    console.log('Сработало обновление')
    setMessages([]);

    clearInterval(interval)

    // interval = setInterval(() => {
    //   const idInstance = localStorage.getItem('idInstance');
    //   const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    //   api.getNotification(idInstance, apiTokenInstance)
    //     .then((data) => {
    //       if (data === null) {
    //         console.log('Уведомлений нет')
    //         return
    //       } else {
    //         if (data.body.typeMessage === "textMessage") {
    //           setMessages([{ textMessage: data.body.messageData.textMessageData.textMessage, type: 'incoming' }, ...messages])
    //         } else if (data.body.typeMessage === "extendedTextMessageData") {
    //           setMessages([{ textMessage: data.body.messageData.extendedTextMessageData.text, type: 'incoming' }, ...messages])
    //         } else  {
    //           setMessages(messages)
    //         }
    //       }
    //       api.deleteNotification(data.receiptId, idInstance, apiTokenInstance)
    //         .then(() => {
    //           console.log('Уведомление удалено')
    //         })
    //         .catch((err) => {
    //           console.log(`Ошибка: ${err}`);
    //         })
    //     })

    // }, 7000)
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
        path='/'
        element={<Authorization
          onGetCredentials={handleGetCredentials}
        />}
      />
    </Routes>
  );
}

export default App;
