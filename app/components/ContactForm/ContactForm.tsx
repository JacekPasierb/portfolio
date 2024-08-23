import {
  Formik,
  Form,
  FormikHelpers,
  Field,
  FormikErrors,
  ErrorMessage,
} from "formik";
import React from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log("Form data", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email adress").required("Required"),
        message: Yup.string().required(),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={css.form}>
              <h2 className={css.title}>Napisz wiadomość</h2>
          <div className={css.formGroup}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              className={`${css.formField} ${
                errors.name && touched.name ? css.shake : ""
              }`}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              className={`${css.formField} ${
                errors.email && touched.email ? css.shake : ""
              }`}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="message" className={css.label}>
              Message
            </label>
            <Field
              name="message"
              as="textarea"
              className={`${css.formField} ${
                errors.message && touched.message ? css.shake : ""
              }`}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={css.error}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={css.submitButton}
          >
            Wyślij
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
