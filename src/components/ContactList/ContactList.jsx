import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import { fetchAll } from "../../redux/contacts/operations";

export function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAll);
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}
