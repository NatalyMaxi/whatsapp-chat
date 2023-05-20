import './Message.css';

const Message = ({ message }) => {
  const messageType = message.typeMessage === 'extendedTextMessage' ? 'outgoing' : 'incoming';
  const incoming = messageType === 'incoming' ? true : false;
  const messageText = message.typeMessage === 'extendedTextMessage' ?
    message.extendedTextMessageData.text :
    message.typeMessage === 'textMessage' ?
      message.textMessageData.textMessage :
      'Неподдерживаемый формат сообщения';

  return (
    <div className={incoming ? `${'message'} ${'message_type_incoming'}` : `${'message'}`}>
      <span>
        {messageText}
      </span>
      <span className='message__time'>
        {message.time}
      </span>
    </div>
  );
}

export default Message;
