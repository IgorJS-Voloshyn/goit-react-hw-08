import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import css from "../LoginForm/LoginForm.module.css";
import { login } from "../../redux/auth/operations";

export const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div>
      <div className={css.title}>
        <h1>Login now!</h1>
      </div>
      <div className={css.form}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <div>
              <label className={css.formLabel}>
                <span>Email</span>
              </label>
              <Field
                className={css.formInput}
                name="email"
                type="email"
                placeholder="email"
                required
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
                className={css.formInput}
                required
              />
              <label></label>
            </div>
            <div>
              <button type="submit" className={css.logInBtn}>
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
