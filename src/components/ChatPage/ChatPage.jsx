import Header from '../Header/Header';
import Main from '../Main/Main';
import './ChatPage.css';

const ChatPage = ({ onAddMessage, messages, userContact }) => {

  return (
    <div className='chat'>
      <div className='chat__elem'></div>
      <div className='chat__wrapper'>
        <Header />
        <Main
          onAddMessage={onAddMessage}
          messages={messages}
          userContact={userContact} />
      </div>
    </div>

  );
}

export default ChatPage;
