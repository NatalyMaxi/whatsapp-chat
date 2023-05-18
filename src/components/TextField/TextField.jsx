import './TextField.css';

const TextField = (props) => {
  const handleChangeAndSize = (ev) => {
    const target = ev.target;
    target.style.height = '42px';
    target.style.height = `${target.scrollHeight}px`;

    // handleChange(ev);
  };
  return (
    <textarea
      className='textField'
      type='text'
      onChange={handleChangeAndSize}
      placeholder='Введите сообщение'
    />

  );
}

export default TextField;
