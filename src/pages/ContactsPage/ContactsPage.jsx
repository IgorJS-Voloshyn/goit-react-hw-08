import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import css from "../ContactsPage/ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
