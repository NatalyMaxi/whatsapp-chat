import Search from '../Search/Search';
import './Main.css';
import envelope from '../../images/envelope.png'
import InputMessage from '../InputMessage/InputMessage';
import clip from '../../images/clip.png'
import smail from '../../images/smail.png'
import Contact from '../Contact/Contact';
import Message from '../Message/Message';

const Main = ({ onAddMessage, messages, userContact }) => {

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
              />
            })
          }
        </div>
      </div>
      {/* {
        chat &&
        <div className='content__right'>
        </div>
      } */}
      <div className='content__right content__right_type_background'>
        {
          messages.map((message) => {
            return <Message
              key={message.idMessage}
              message={message}
            />
          })
        }
        <div className='content__chat'>
          <div className='content__items'>
            <img className='content__item' src={smail} alt='Смайлик' />
            <img className='content__item' src={clip} alt='Скрепка' />
          </div>
          <InputMessage />
          <div className='content__btn' onClick={onAddMessage}></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
