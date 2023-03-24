import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactNumber,
  ContactListButton,
  ContactName,
} from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactName>
        {name}: <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <ContactListButton onClick={handleDeleteContact}>
        Delete
      </ContactListButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
