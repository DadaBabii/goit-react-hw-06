import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleBtnDelete = () => {
    const contactId = contact.id;
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.container}>
      <div>
        <p> name: {contact.name}</p>
        <p> tel:{contact.number} </p>
      </div>
      <div>
        <button type="button" onClick={handleBtnDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
