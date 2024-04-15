import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "/src/redux/contactsSlice.js";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(50, `Your user name must be less than 50 characters!`)
    .min(3, "Too Short!"),
  number: Yup.string()
    .required("Phone number is required!")
    .max(50, `Too long number`)
    .min(3, "Too Short!"),
});

const initialValues = { name: "", number: "" };

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label>
          Name
          <br />
          <Field type="text" name="name" />
          <ErrorMessage className={css.mes} component="span" name="name" />
        </label>
        <label>
          Number
          <br />
          <Field type="number" name="number" />
          <ErrorMessage className={css.mes} component="span" name="number" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
