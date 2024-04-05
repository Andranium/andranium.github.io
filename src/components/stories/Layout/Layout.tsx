import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header.tsx';
import ProductCardCart from '../ProductCardCart/ProductCardCart.tsx';

export default function Layout() {
  return (
    <main className={styles.layout}>
      <Header />

      <ProductCardCart
        src="https://egoisme.ru/wa-data/public/shop/products/56/24/22456/images/24066/24066.55x0.jpg"
        title="Chopard vetiver d'haiti au the vert"
        description="Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь..."
      />
    </main>
  );
}
