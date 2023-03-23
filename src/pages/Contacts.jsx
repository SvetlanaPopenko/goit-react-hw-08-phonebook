import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Contacts</h1>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};

export default Contacts;
