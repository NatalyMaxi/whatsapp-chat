import Header from '../Header/Header';
import Main from '../Main/Main';
import './ChatPage.css';

const ChatPage = ({ onAddMessage, userContacts, addChat, searchText, messages, onSearch, chatContent }) => {

  return (
    <div className='chat'>
      <div className='chat__elem'></div>
      <div className='chat__wrapper'>
        <Header />
        <Main
          onAddMessage={onAddMessage}
          messages={messages}
          userContacts={userContacts}
          addChat={addChat}
          searchText={searchText}
          onSearch={onSearch}
          chatContent={chatContent}
        />
      </div>
    </div>

  );
}

export default ChatPage;
