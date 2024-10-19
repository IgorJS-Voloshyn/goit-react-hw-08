// import { ContactForm } from "./components/ContactForm/ContactForm";
// import { ContactList } from "./components/ContactList/ContactList";
// import { SearchBox } from "./components/SearchBox/SearchBox";
// import css from "./App.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAll } from "./redux/contactsOps";
// import { useEffect } from "react";
// import { selectError, selectLoading } from "./redux/contactsSlice";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchAll());
//   }, [dispatch]);

//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.title}>Constacts</h2>
//       <SearchBox />
//       {isLoading && <h2>Loading...</h2>}
//       {isError && <h2>Error...</h2>}
//       <ContactList />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
