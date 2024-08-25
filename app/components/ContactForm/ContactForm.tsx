import {
  Formik,
  Form,
  FormikHelpers,
  Field,
  FormikErrors,
  ErrorMessage,
} from "formik";
import React, { useState } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [statusMsg, setStatusMsg] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMsg(
          "Dzięki za wiadomość, odpowiem najszybciej jak to możliwe."
        );
        resetForm();
      } else {
        setStatusMsg("Wystąpił błąd podczas wysyłania wiadomości.");
      }
    } catch (error) {
      setStatusMsg("Wystąpił błąd podczas wysyłania wiadomości.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(25, "Pole może zawierać max 25 znaków !")
          .required("Pole imię i nazwisko jest wymagane"),
        email: Yup.string()
          .email("Niepoprawny format email")
          .required("Pole email jest wymagane !"),
        message: Yup.string().required("Pole wiadomości jest puste !"),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched, isValid, dirty }) => (
        <Form className={css.form}>
          <h2 className={css.title}>Napisz wiadomość</h2>
          <div className={css.formGroup}>
            <label htmlFor="name" className={css.label}>
              Imię i Nazwisko
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
              Treść Wiadomości
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
            disabled={isSubmitting || !isValid || !dirty}
            className={css.submitButton}
          >
            Wyślij
          </button>
          {statusMsg && <p className={css.statusMsg}>{statusMsg}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
