import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.container}>
      <div>
        <p> name: {contact.name}</p>
        <p> tel:{contact.number} </p>
      </div>
      <div>
        <button type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
