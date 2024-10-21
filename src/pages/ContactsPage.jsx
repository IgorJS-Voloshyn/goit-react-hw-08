// import { useSelector } from "react-redux";
// import css from "../components/ContactList/ContactList.module.css";
// import { selectVisibleContacts } from "../redux/contactsSlice";
// import Contact from "../components/Contact/Contact";

import ContactForm from "../components/ContactForm/ContactForm";

// export function ContactsPage() {
//   const contacts = useSelector(selectVisibleContacts);

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => {
//         return <Contact key={id} id={id} name={name} number={number} />;
//       })}
//     </ul>
//   );
// }
const ContactsPage = () => {
  return <ContactForm />;
};
export default ContactsPage;
