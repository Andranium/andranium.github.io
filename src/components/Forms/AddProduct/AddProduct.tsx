import React from 'react';
import styles from './AddProduct.module.scss';
import { Formik, Form, Field } from 'formik';
import addProductSchema from '../../../schemas/addProduct';

export default function AddProduct() {
  const initialValues = {
    name: '',
    quantity: 0,
    description: '',
  };

  function formSubmit(data: { name: string; quantity: number; description: string }) {
    console.log(`Продукт ${data.name} успешно добавлен`);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit} validationSchema={addProductSchema}>
      {({ errors, touched }) => (
        <Form className={styles.addProduct}>
          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Имя Товара</label>

            <Field
              className={errors.name && touched.name && styles.addProduct_inputError}
              name="name"
              type="text"
              placeholder="Name"
            ></Field>

            <div className={styles.addProduct_error}>{errors.name && touched.name && errors.name}</div>
          </div>

          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Количевство</label>

            <Field
              className={errors.quantity && touched.quantity && styles.addProduct_inputError}
              name="quantity"
              type="number"
              placeholder="Количевство"
            ></Field>

            <div className={styles.addProduct_error}>{errors.quantity && touched.quantity && errors.quantity}</div>
          </div>

          <div className={styles.addProduct_fieldWrapper}>
            <label className={styles.addProduct_label}>Описание товара</label>

            <Field
              className={errors.description && touched.description && styles.addProduct_inputError}
              name="description"
              type="text"
              placeholder="Описание товара"
            ></Field>

            <div className={styles.addProduct_error}>
              {errors.description && touched.description && errors.description}
            </div>
          </div>

          <button type="submit">Добавить товар</button>
        </Form>
      )}
    </Formik>
  );
}
