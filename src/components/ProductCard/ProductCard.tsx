import React, { forwardRef, LegacyRef } from 'react';
import styles from './ProductCard.module.scss';
import CartButton from '../CartButton/CartButton';

type TProps = {
  title: string;
  url: string;
  description: string;
};

function ProductCard({ title, url, description }: TProps, ref: LegacyRef<HTMLDivElement>) {
  return (
    <div ref={ref} className={styles.product_card}>
      <h3 className={styles.product_card__title}>{title}</h3>

      <img className={styles.product_card__image} src={url} alt={title} />

      <p className={styles.product_card__description}>{description}</p>

      <div className={styles.product_card__footer}>
        <CartButton disabled={true} count={0} />
      </div>
    </div>
  );
}

export default forwardRef(ProductCard);
