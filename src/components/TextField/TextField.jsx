import React from 'react';
import './TextField.css';

const Box = React.forwardRef((props, ref) => {
  return <TextField {...props} ref={ref} />
})

const TextField = (props) => {
  const handleChangeAndSize = (evt) => {
    const target = evt.target;
    target.style.height = '42px';
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <textarea
      className='textField'
      type='text'
      onChange={handleChangeAndSize}
      placeholder='Введите сообщение'
      name='textField'
      spellheck='true'
      ref={props.refItem}
      minLength="1"
    ></textarea>

  );
}

export default Box;
