import ContactItem from '../ContactItem/ContactItem';

import { useGetContactsQuery } from '../../store/APIs/contactsAPI';

const ContactsList = () => {
  useGetContactsQuery();
  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {data && (
        <ul>
          <ContactItem />
        </ul>
      )}
    </>
  );
};

export default ContactsList;
