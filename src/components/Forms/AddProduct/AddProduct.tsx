import React from 'react';
import styles from './AddProduct.module.scss';
import { Formik, Form, Field, FormikValues } from 'formik';
import addProductSchema from '../../../schemas/addProduct';

export default function AddProduct() {
  const initialValues = {
    name: '',
    quantity: 0,
    description: ''
  }

  function formSubmit(data: FormikValues) {
    console.log(data);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      validationSchema={addProductSchema}
    >
      {({ errors, touched }: any) => (
        <Form className={styles.addProduct}>
          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Имя Товара</label>

            <Field
              name="name"
              type="text"
              placeholder="Name">

            </Field>

            <div className={styles.addProduct_error}>
              { (errors.name && touched.name) && errors.name }
            </div>
          </div>

          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Количевство</label>

            <Field
              name="quantity"
              type="number"
              placeholder="Количевство"></Field>

            <div className={styles.addProduct_error}>
              { (errors.quantity && touched.quantity) && errors.quantity }
            </div>
          </div>

          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Описание товара</label>

            <Field
              name="description"
              type="text"
              placeholder="Описание товара"></Field>

            <div className={styles.addProduct_error}>
              { (errors.description && touched.description) && errors.description }
            </div>
          </div>

          <button type="submit">Добавить товар</button>
        </Form>
      )}
    </Formik>
  )
}
