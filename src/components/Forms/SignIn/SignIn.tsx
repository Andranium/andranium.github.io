import React, { memo } from 'react';
import { Formik, Form, Field, FormikValues } from 'formik';
import styles from './SignIn.module.scss';
import singInSchema from '../../../schemas/singIn';

export const SignIn = memo<any>(() => {
  function signIn(data: FormikValues) {
    console.log(`Signed in ${data.email} and ${data.password}`);
  }

  return (
    <Formik
      initialValues={
        {
          email: '',
          password: ''
        }
      }
      onSubmit={signIn}
      validationSchema={singInSchema}
    >
      { ({ errors, touched }: any) => (
        <Form className={styles.signIn}>
          <div>Форма входа</div>

          <div className={styles.signIn_fieldWrapper}>
            <label className={styles.signIn_label}>Email</label>

            <Field
              className={
                (errors.email && touched.email) && styles.signIn_inputError
              }
              name="email"
              type="text"
              placeholder="email"
            ></Field>

            <div className={styles.signIn_error}>
              { (errors.email && touched.email) && errors.email }
            </div>
          </div>

          <div className={styles.signIn_fieldWrapper}>
            <label className={styles.signIn_label}>password</label>

            <Field
              className={
                (errors.password && touched.password) && styles.signIn_inputError
              }
              name="password"
              type="password"
              placeholder="password"
            ></Field>

            <div className={styles.signIn_error}>
              { (errors.password && touched.password) && errors.password }
            </div>
          </div>

          <button type="submit">Login</button>
        </Form>
      ) }
    </Formik>
  )
});

SignIn.displayName = 'SignIn'
