import './Message.css';

const Message = ({ message, type }) => {
  const incoming = type === 'incoming' ? true : false

  return (
    <div className={incoming ? `${'message'} ${'message_type_incoming'}` : `${'message'}`}>
      <span>
        {message}
      </span>

    </div>
  );
}

export default Message;
