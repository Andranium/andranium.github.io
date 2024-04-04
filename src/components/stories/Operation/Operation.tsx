import React from 'react';
import styles from './Operation.module.scss';
import CartButton from 'src/components/stories/CartButton/CartButton';

type TOperation = {
  title: string;
  src: string;
  description: string;
}

export default function Operation({ title, src, description }: TOperation) {
  return (
    <div className={styles.operation}>
      <h3 className={styles.operation_title}>
        { title }
      </h3>

      <img
        className={styles.operation_image}
        src={src}
        alt={title}
      />

      <div className={styles.operation_description}>
        { description }
      </div>

      <div className={styles.operation_footer}>
        <CartButton
          count={0}
          disabled
        />
      </div>
    </div>
  )
}
