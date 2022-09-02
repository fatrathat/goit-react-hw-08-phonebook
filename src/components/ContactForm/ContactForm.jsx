import { useState } from 'react';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'store/APIs/contactsAPI';

import styles from './style.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const changeHandler = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value.toLowerCase());
    } else {
      setNumber(value);
    }
  };

  const submitHandler = async e => {
    e.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);

      return;
    }

    await addContact({ name, number });
    e.target.reset();
  };

  return (
    <div className={styles.ContactFormContainer}>
      <form onSubmit={submitHandler} className={styles.ContactForm}>
        {/* Name */}
        <TextField
          id="outlined-basic"
          label="Name"
          noValidate
          autoComplete="off"
          size="small"
          onChange={changeHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        {/* Number */}
        <TextField
          id="outlined-basic"
          label="Phone number"
          noValidate
          autoComplete="off"
          size="small"
          onChange={changeHandler}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
