import UserMenu from 'components/UserMenu/UserMenu';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <div>
      <UserMenu />
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
