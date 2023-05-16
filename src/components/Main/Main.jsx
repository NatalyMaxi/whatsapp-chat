import Search from '../Search/Search';
import './Main.css';
import envelope from '../../images/envelope.png'
import InputMessage from '../InputMessage/InputMessage';
import clip from '../../images/clip.png'
import smail from '../../images/smail.png'
import Contact from '../Contact/Contact';

const Main = (props) => {

  return (
    <main className='content'>
      <div className='content__left'>
        <div className='content__search-container'>
          <div className='content__search'>
            <Search />
            <div className='content__elem'>
              <img className='content__img' src={envelope} alt='Конверт' />

            </div>
          </div>
        </div>

        <div className='content__contacts-container'>
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
          <Contact telephone='+79612072195' />
          <Contact telephone='+79058570367' />
          <Contact telephone='+79123923319' />
        </div>
      </div>
      {
        props.chat &&
        <div className='content__right'>
        </div>
      }
      <div className='content__right content__right_type_background'>
        <div className='content__chat'>
          <div className='content__items'>
            <img className='content__item' src={smail} alt='Смайлик' />
            <img className='content__item' src={clip} alt='Скрепка' />
          </div>
          <InputMessage />
          <div className='content__btn'></div>
        </div>
      </div>

    </main>
  );
}

export default Main;
