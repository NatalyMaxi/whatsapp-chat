import './Contact.css';
import avatar from '../../images/avatar.jpg';

const Contact = ({ onClick, contact }) => {

  return (
    <div className='contact' onClick={() => onClick(contact.id)}>
      <img className='contact__img' src={avatar} alt='Аватар' />
      <div className='contact__container'>
        <span className='contact__telephone'>{contact.name}</span>
      </div>
    </div>
  );
}

export default Contact;
