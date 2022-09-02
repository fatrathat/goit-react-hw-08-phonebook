import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'store/APIs/contactsAPI';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './style.module.css';

const ContactItem = () => {
  const [deleteContact] = useDeleteContactMutation();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const normalFilter = filter.trim().toLowerCase();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );

  return filterContacts.map(({ name, id, number }) => {
    return (
      <li className={styles.ListItem} key={id}>
        <div className={styles.ListItemContent}>
          <p>
            {name}: {number}
          </p>
          <IconButton
            variant="outlined"
            name="delete"
            type="text"
            onClick={() => deleteContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
        <UpdateContactForm contactId={id} />
      </li>
    );
  });
};

export default ContactItem;
