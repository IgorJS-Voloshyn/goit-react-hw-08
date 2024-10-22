import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "../RegistrationPage/RegistrationPage.module.css";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(register(values));

    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className={css.title}>
        <h1>Sign up now!</h1>
      </div>
      <div className={css.form}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <div>
              <label className={css.formLabel}>
                <span>Name</span>
              </label>
              <Field
                name="name"
                type="text"
                placeholder="name"
                required
                className={css.formInput}
              />
            </div>
            <div>
              <label className={css.formLabel}>
                <span>Email</span>
              </label>
              <Field
                name="email"
                type="email"
                placeholder="email"
                required
                className={css.formInput}
              />
            </div>
            <div>
              <label className={css.formLabel}>
                <span>Password</span>
              </label>
              <Field
                name="password"
                type="password"
                placeholder="password"
                required
                className={css.formInput}
              />
              <label></label>
            </div>
            <div>
              <button type="submit" className={css.registerBtn}>
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Register;
