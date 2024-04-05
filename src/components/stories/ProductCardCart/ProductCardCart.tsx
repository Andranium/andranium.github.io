import React from 'react';
import styles from './ProductCardCart.module.scss';
import CartButton from '../CartButton/CartButton.tsx';

type TProductCardCart = {
  title: string;
  src: string;
  description: string;
};

export default function ProductCardCart({ title, src, description }: TProductCardCart) {
  return (
    <div className={styles.product_cart}>
      <img className={styles.product_cart_image} src={src} alt={title} />

      <div className={styles.product_cart_wrapper}>
        <h3 className={styles.product_cart_title}>{title}</h3>

        <div className={styles.product_cart_description}>{description}</div>

        <CartButton count={1} />
      </div>
    </div>
  );
}
