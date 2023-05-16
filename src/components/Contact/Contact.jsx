import './Contact.css';
import avatar from '../../images/avatar.jpg'

const Contact = (props) => {

  return (
    <div className='contact'>
      <img className='contact__img' src={props.contactAvatar ? props.contactAvatar : avatar} alt='Аватар контакта' />
      <div className='contact__container'>
        <span className='contact__telephone'>{props.telephone}</span>
      </div>
</div>
  );
}

export default Contact;
