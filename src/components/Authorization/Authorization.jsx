import './Authorization.css';

const Authorization = (props) => {

  return (
    <div className='auth'>
      <div className='auth__container'>
        <h3 className='auth__title'>Введите учетные данные</h3>
        <form className='auth__form'>
          <input className='auth__input' placeholder='Введите idInstance' required />
          <input className='auth__input' placeholder='Введите apiTokenInstance' required />
          <button className='auth__button'>Войти</button>
        </form>
      </div>
    </div>

  );
}

export default Authorization;
