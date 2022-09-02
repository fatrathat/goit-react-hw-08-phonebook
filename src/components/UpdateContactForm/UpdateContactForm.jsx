import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useUpdateContactMutation } from 'store/APIs/contactsAPI';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';

import styles from './style.module.css';

const UpdateContactForm = ({ contactId }) => {
  const navigate = useNavigate();
  const contacts = useSelector(state => state.contacts.items);
  const contact = contacts
    ? contacts.find(contact => contact.id === contactId)
    : {};
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [updateContact] = useUpdateContactMutation();

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
    await updateContact({ contactId, name, number });
    navigate(`/contacts`);
    e.target.reset();
  };

  return (
    <>
      {contacts && (
        <div>
          <form className={styles.UpdateForm} onSubmit={submitHandler}>
            <TextField
              className={styles.UpdateInput}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              margin="dense"
              onChange={changeHandler}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <TextField
              className={styles.UpdateInput}
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
              size="small"
              margin="dense"
              onChange={changeHandler}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <IconButton type="submit">
              <SaveIcon />
            </IconButton>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateContactForm;
