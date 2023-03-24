import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  ContactFormWrap,
  ContactFormButton,
  ContactInput,
  ContactText,
  Error,
} from './ContactForm.styled';
import toast from 'react-hot-toast';
import { selectContacts } from 'redux/contacts/selectors';
import { checkContact, checkNumber } from 'components/services';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(contacts, values)) {
      toast(`${values.name} already exists`, {
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#ff0000',
        },
      });
      return;
    }
    if (checkNumber(contacts, values)) {
      toast(`${values.number} already exists`, {
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#ff0000',
        },
      });
      return;
    }
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactFormWrap autoComplete="off">
        <ContactText htmlFor="name">
          Name
          <ContactInput type="text" name="name" />
          <Error name="name" component="div" />
        </ContactText>
        <ContactText htmlFor="number">
          Phone
          <ContactInput type="tel" name="number" placeholder="+380XXXXXXXXX" />
          <Error name="number" component="div" />
        </ContactText>
        <ContactFormButton type="submit">Add contact</ContactFormButton>
      </ContactFormWrap>
    </Formik>
  );
};

export default ContactForm;
