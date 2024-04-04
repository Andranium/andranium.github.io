import React from 'react';
import styles from './CartButton.module.scss';

type TCartButton = {
  count: number;
  disabled?: boolean;
}

export default function CartButton({ count = 0, disabled = false, ...rest }: TCartButton) {
  const cartButtonTemplate = count <= 0 ?
    <button className={`${styles.cart__button} ${ disabled && styles.cart__button_disabled }`}>
      В Корзину
    </button>

    :

    <div className={`${styles.cart__input} ${ disabled && styles.cart__button_disabled }`}>
      <button className={styles.cart__count_controller}>-</button>
      <span className={styles.cart__count_items}>{ count }</span>
      <button className={styles.cart__count_controller}>+</button>
    </div>

  return (
    <>
      { cartButtonTemplate }
    </>
  )
}
