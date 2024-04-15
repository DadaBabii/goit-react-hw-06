import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { nanoid } from "nanoid";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.filters.name);

  const handleSearchValue = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  const onAddContact = (formData) => {
    const newContact = { ...formData, id: nanoid() };
    dispatch(addContact(newContact));
  };

  const filteredContacts = selectContacts.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={selectNameFilter} onChange={handleSearchValue} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}

export default App;
