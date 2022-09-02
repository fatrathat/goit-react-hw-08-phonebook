import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'store/APIs/contactsAPI';

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
      <li key={id}>
        {name}: {number}
        <button name="delete" type="text" onClick={() => deleteContact(id)}>
          delete
        </button>
      </li>
    );
  });
};

export default ContactItem;
