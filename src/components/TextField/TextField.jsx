import './TextField.css';

const TextField = (props) => {
  const handleChangeAndSize = (evt) => {
    const target = evt.target;
    target.style.height = '42px';
    target.style.height = `${target.scrollHeight}px`;
    props.onChange(evt)
    // handleChange(ev);
  };
  return (
    <textarea
      className='textField'
      type='text'
      onChange={handleChangeAndSize}
      placeholder='Введите сообщение'
      name='textField'
      spellheck= 'true'
  ></textarea>

  );
}

export default TextField;
