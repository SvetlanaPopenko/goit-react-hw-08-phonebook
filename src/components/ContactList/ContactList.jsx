import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, ContactItems } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ContactsList>
          {visibleContacts.map(contact => (
            <ContactItems key={contact.id}>
              <ContactItem contact={contact} />
            </ContactItems>
          ))}
        </ContactsList>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
