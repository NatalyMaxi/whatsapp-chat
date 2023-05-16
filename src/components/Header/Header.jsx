import './Header.css';
import people from '../../images/people.png'
import status from '../../images/status.png'
import chat from '../../images/chat.png'
import menu from '../../images/menu.png'
import avatar from '../../images/avatar.jpg'
import magnifier from '../../images/magnifier.png'

const Header = (props) => {

  return (
    <header className='header'>
      <div className='header__left'>
        <img className='header__img' src={props.avatar ? props.avatar : avatar} alt='Аватар пользователя' />
        <ul className='header__items'>
          <li className='header__item'>
            <img src={people} alt='Иконка контакты' className='header__item-img' />
          </li>
          <li className='header__item'>
            <img src={status} alt='Иконка статус' className='header__item-img' />
          </li>
          <li className='header__item'>
            <img src={chat} alt='Иконка чата' className='header__item-img' />
          </li>
          <li className='header__item'>
            <img src={menu} alt='Иконка меню' className='header__item-img' />
          </li>
        </ul>
      </div>
      <div className='header__right'>
        <img className='header__img' src={props.contactAvatar ? props.contactAvatar : avatar} alt='Аватар контакта' />
        <span className='header__span'></span>
        <ul className='header__items'>
          <li className='header__item'>
            <img src={magnifier} alt='Иконка лупа' className='header__item-img' />
          </li>
          <li className='header__item'>
            <img src={menu} alt='Иконка меню' className='header__item-img' />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
