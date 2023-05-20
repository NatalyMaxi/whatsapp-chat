import './Message.css';

const Message = ({ message, type, timeReceivingMessages }) => {
  const incoming = type === 'incoming' ? true : false

  return (
    <div className={incoming ? `${'message'} ${'message_type_incoming'}` : `${'message'}`}>
      <span>
        {message}
      </span>
      <span className='message__time'>
        {timeReceivingMessages}
      </span>
    </div>
  );
}

export default Message;
