import Header from '../Header/Header';
import Main from '../Main/Main';
import './ChatPage.css';

const ChatPage = (props) => {

  return (
    <div className='chat'>
      <div className='chat__elem'></div>
      <div className='chat__wrapper'>
        <Header />
        <Main/>
      </div>
    </div>

  );
}

export default ChatPage;
