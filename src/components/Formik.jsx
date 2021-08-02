import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  sender_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  sender_sender_message: Yup.string()
    .email('Invalid email')
    .required('Required'),
  sender_message: Yup.string()
    .min(10, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
});

export const ValidationSchemaExample = () => {
  const [messageHasBeenSent, setMessageHasBeenSent] = useState(false);

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          sender_email: '',
          sender_name: '',
          sender_message: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, e) => {
          e.preventDefault();
          emailjs
            .sendForm(
              'service_wu3vxgp',
              'template_9qxbqpi',
              e.target,
              'user_Tx3bN6eUsqDxtQEocM37H'
            )
            .then(setMessageHasBeenSent(true))
            .finally(
              setTimeout(() => {
                setMessageHasBeenSent(false);
              }, 3000)
            );
          e.target.reset();
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name='sender_name' />
            {errors.sender_name && touched.sender_name ? (
              <div>{errors.sender_name}</div>
            ) : null}
            <Field name='sender_email' type='email' />
            {errors.sender_email && touched.sender_email ? (
              <div>{errors.sender_email}</div>
            ) : null}
            <Field name='sender_message' type='text' />
            {errors.sender_message && touched.sender_message ? (
              <div>{errors.sender_message}</div>
            ) : null}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
