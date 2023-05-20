import React, { useRef } from 'react';
import Search from '../Search/Search';
import './Main.css';
import TextField from '../TextField/TextField';
import Contact from '../Contact/Contact';
import Message from '../Message/Message';

const Main = ({ onAddMessage, userContacts, addChat, searchText, messages, onSearch, chatContent }) => {
  const textFieldRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddMessage({
      message: textFieldRef.current.value
    });
    textFieldRef.current.value = ''
  }

  const handleOnKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      handleSubmit(evt)
    }
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
                return contact.name.toLowerCase().includes(searchText.toLowerCase()) ?
                  true :
                  contact.id.includes(searchText) ?
                    true :
                    false
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

                  if (item.hasOwnProperty('typeMessage')) {
                    if (item.typeMessage === "textMessage") {
                      return <Message
                        key={index}
                        message={item.textMessageData.textMessage}
                        type={item.type}
                        timeReceivingMessages={item.time}
                      />
                    }
                    if (item.typeMessage === "extendedTextMessageData") {
                      return <Message
                        key={index}
                        message={item.extendedTextMessageData.text}
                        type={item.type}
                        timeReceivingMessages={item.time}
                      />
                    }
                    else {
                      return <Message
                        key={index}
                        message='Неподдерживаемый формат сообщения'
                        type={item.type}
                        timeReceivingMessages={item.time}
                      />
                    }
                  }
                  return <Message
                    key={index}
                    message={item.textMessage}
                    type={item.type}
                    timeReceivingMessages={item.time}
                  />
                })
              }
            </div>
            <div className='content__chat'>
              <form className='content__form' onKeyUp={handleOnKeyUp} onSubmit={handleSubmit}>
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
