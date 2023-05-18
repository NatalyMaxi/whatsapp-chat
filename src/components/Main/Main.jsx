import React, { useState } from 'react';
import Search from '../Search/Search';
import './Main.css';
import envelope from '../../images/envelope.png'
import TextField from '../TextField/TextField';
import clip from '../../images/clip.png'
import smail from '../../images/smail.png'
import Contact from '../Contact/Contact';
import Message from '../Message/Message';

const Main = ({ onAddMessage, messages, userContact }) => {
  const [chatContent, setChatContent] = useState(false)
  const [chatData, setChatData] = useState('');
  const [chatId, setChatId] = useState('');

  const handleChange = (evt) => {
    setChatData(evt.target.value);
  }
  const addChat = (evt) => {
    setChatId(evt.currentTarget.id)
    setChatContent(true)
  }

  const handleSubmit = (evt) => {

    evt.preventDefault();
    onAddMessage({
      chatId: chatId,
      message: chatData
    });
  }

  return (
    <main className='content'>
      <div className='content__left'>
        <div className='content__search-container'>
          <div className='content__search'>
            <Search />
            <div className='content__elem'>
              <img className='content__img' src={envelope} alt='Конверт' />

            </div>
          </div>
        </div>
        <div className='content__contacts-container'>
          {
            userContact.map((item) => {
              return <Contact
                key={item.id}
                userName={item.name}
                onClick={addChat}
                contactId={item.id}
                contactact={item}
              />
            })
          }
        </div>
      </div>
      {
        chatContent ?
          (<div className='content__right content__right_type_background'>
            {/* {
              messages.map((message) => {
                return <Message
                  key={message.idMessage}
                  message={message}
                />
              })
            } */}
            <div className='content__chat'>
              <div className='content__items'>
                <img className='content__item' src={smail} alt='Смайлик' />
                <img className='content__item' src={clip} alt='Скрепка' />
              </div>
              <form className='content__form' onSubmit={handleSubmit}>
                <TextField onChange={handleChange} />
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
