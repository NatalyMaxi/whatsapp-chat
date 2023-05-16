import './InputMessage.css';

const InputMessage = (props) => {

  return (
    <div className='text'>
      <div className='text__wrapper'>
        <div
          className='text__container'
          contentEditable={true}
          role='textbox'
          spellCheck='true'
          tabIndex='10'
        >
        </div>
        <p className='text__selected'
        >Введите сообщение</p>
      </div>
    </div>

  );
}

export default InputMessage;
