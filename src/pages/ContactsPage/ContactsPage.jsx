import UserMenu from 'components/UserMenu/UserMenu';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <UserMenu />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
