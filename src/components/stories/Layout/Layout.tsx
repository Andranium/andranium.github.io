import React from 'react';
import styles from './Layout.module.scss';
import Header from 'src/components/stories/Header/Header';
import Operation from 'src/components/stories/Operation/Operation';
import ProductCardCart from 'src/components/stories/ProductCardCart/ProductCardCart';

export default function Layout() {
  return (
    <main className={styles.layout}>
      <Header />

      <ProductCardCart
        src="https://egoisme.ru/wa-data/public/shop/products/56/24/22456/images/24066/24066.55x0.jpg"
        title="Chopard vetiver d'haiti au the vert"
        description="Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь является качественно новой ступенью новых принципов формирования..."
      />
    </main>
  );
}
