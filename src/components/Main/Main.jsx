import React, { useState, useRef } from 'react';
import Search from '../Search/Search';
import './Main.css';
import TextField from '../TextField/TextField';
import clip from '../../images/clip.png'
import smail from '../../images/smail.png'
import Contact from '../Contact/Contact';
import Message from '../Message/Message';

const Main = ({ onAddMessage, userContacts, api }) => {
  const [chatContent, setChatContent] = useState(false)
  const [chatId, setChatId] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const textFieldRef = useRef();
  let interval

  const addChat = (id) => {
    setChatId(id)
    setChatContent(true)
    setMessages([]);

    // clearInterval(interval)

    // interval = setInterval(() => {
    //   const idInstance = localStorage.getItem('idInstance');
    //   const apiTokenInstance = localStorage.getItem('apiTokenInstance');
    //   api.getChatHistory(id, idInstance, apiTokenInstance)
    //     .then((data) => {
    //       setMessages(data)
    //     })
    //     .catch((err) => {
    //       console.log(`Ошибка: ${err}`);
    //     })
    // }, 5000)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddMessage({
      chatId: chatId,
      message: textFieldRef.current.value
    });
    textFieldRef.current.value = ''
  }

  const onSearch = (text) => {
    setSearchText(text)
  }

  return (
    <main className='content'>
      <div className='content__left'>
        <div className='content__search-container'>
          <div className='content__search'>
            <Search onSearch={onSearch} />
          </div>
        </div>
        <div className='content__contacts-container'>

          {
            userContacts
              .filter((contact) => {
                if (!searchText) {
                  return true;
                }
                return contact.name.toLowerCase().includes(searchText.toLowerCase())
              })
              .map((userContact) => {
                return <Contact
                  key={userContact.id}
                  onClick={addChat}
                  contact={userContact}
                />
              })
          }
        </div>
      </div>
      {
        chatContent ?
          (<div className='content__right content__right_type_background'>
            <div className='content__messages'>
              {
                messages.map((item, index) => {
                  return <Message
                    key={index}
                    // key={item.idMessage}
                    message={item.textMessage}
                    type={item.type}
                  />
                })
              }
            </div>

            <div className='content__chat'>
              <div className='content__items'>
                <img className='content__item' src={smail} alt='Смайлик' />
                <img className='content__item' src={clip} alt='Скрепка' />
              </div>
              <form className='content__form' onSubmit={handleSubmit}>
                <TextField refItem={textFieldRef} />
                <button
                  className='content__btn'
                  type='submit'
                />
              </form>
            </div>
          </div>) :
          (<div className='content__right'></div>)
      }
    </main>
  );
}

export default Main;
