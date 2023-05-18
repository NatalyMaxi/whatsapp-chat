import Header from '../Header/Header';
import Main from '../Main/Main';
import './ChatPage.css';

const ChatPage = ({ onAddMessage, messages, userContacts, api }) => {

  return (
    <div className='chat'>
      <div className='chat__elem'></div>
      <div className='chat__wrapper'>
        <Header />
        <Main
          onAddMessage={onAddMessage}
          messages={messages}
          userContacts={userContacts}
          api={api}
        />
      </div>
    </div>

  );
}

export default ChatPage;
