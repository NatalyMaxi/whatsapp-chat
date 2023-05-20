import { useState } from 'react';
import './Authorization.css';
import { regexApiTokenInstance, regexIdInstance } from '../../utils/constans';

const Authorization = ({ onGetCredentials }) => {
  const [userCredentials, setUserCredentials] = useState({ idInstance: '', apiTokenInstance: '' });
  const isValidIdInstance = regexIdInstance.test(userCredentials.idInstance);
  const isValidApiTokenInstance = regexApiTokenInstance.test(userCredentials.apiTokenInstance);

  const validityData = !isValidIdInstance || !isValidApiTokenInstance ? true : false

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserCredentials(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onGetCredentials({
      idInstance: userCredentials.idInstance,
      apiTokenInstance: userCredentials.apiTokenInstance
    });
  }

  return (
    <div className='auth'>
      <div className='auth__container'>
        <h3 className='auth__title'>Введите учетные данные</h3>
        <form className='auth__form' onSubmit={handleSubmit}>
          <input
            className='auth__input'
            placeholder='Введите idInstance'
            required
            onChange={handleChange}
            value={userCredentials.idInstance || ''}
            name='idInstance'
          />
          <input
            className='auth__input'
            placeholder='Введите apiTokenInstance'
            required
            onChange={handleChange}
            value={userCredentials.apiTokenInstance || ''}
            name='apiTokenInstance'
          />
          <button
            type='submit'
            disabled={validityData}
            className={validityData ? `${'auth__button'} ${'auth__button_disabled'}` : `${'auth__button'}`}>Войти</button>
        </form>
      </div>
    </div>

  );
}

export default Authorization;
