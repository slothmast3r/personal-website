import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "./ContactForm.scss";
const emailjsServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjsUserID = import.meta.env.VITE_EMAILJS_USER_ID;


const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };



  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (
    values: { name: string; email: string; message: string },
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    emailjs
      .send(emailjsServiceID ,
        emailjsTemplateID,    
      values,
      emailjsUserID)

      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitting(false);
          resetForm();
        },
        (err) => {
          console.log("FAILED...", err);
          setSubmitting(false);
        }
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form id="contact-form" className="contact-section">
        <div className="field-wrapper">
          <Field type="text" name="name" placeholder="Your Name" />
          <ErrorMessage className="ErrorMessage" name="name" component="div" />
        </div>
        
        <div className="field-wrapper">
          <Field type="email" name="email" placeholder="Your Email" />
          <ErrorMessage className="ErrorMessage" name="email" component="div" />
        </div>
        
        <div className="field-wrapper">
          <Field as="textarea" name="message" placeholder="Your Message" />
          <ErrorMessage className="ErrorMessage" name="message" component="div" />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Please wait..." : "Send Message"}
        </button>
      </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
