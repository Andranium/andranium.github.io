import React, { useState, useEffect, useRef } from 'react';
import styles from './Products.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useObserver } from '../../hooks/useObserver';

const PRODUCTS_MOCK = [
  {
    id: 1,
    title: "chopard vetiver d'haiti au the vert",
    url: 'https://butik-duhov.ru/wa-data/public/shop/products/46/12/31246/images/41452/41452.970.jpg',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },

  {
    id: 2,
    title: 'Orto parisi megamare',
    url: 'https://avatars.mds.yandex.net/i?id=35015dbb6d740557557432e4073ebf6984d6c689-12884996-images-thumbs&n=13',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },

  {
    id: 3,
    title: 'initio musk therapy',
    url: 'https://avatars.mds.yandex.net/i?id=18147aec930d05fa4f08126ca288d56c7c483512-12753081-images-thumbs&n=13',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },

  {
    id: 4,
    title: 'initio musk therapy',
    url: 'https://avatars.mds.yandex.net/i?id=18147aec930d05fa4f08126ca288d56c7c483512-12753081-images-thumbs&n=13',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },

  {
    id: 5,
    title: 'initio musk therapy',
    url: 'https://avatars.mds.yandex.net/i?id=18147aec930d05fa4f08126ca288d56c7c483512-12753081-images-thumbs&n=13',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },

  {
    id: 6,
    title: 'initio musk therapy',
    url: 'https://avatars.mds.yandex.net/i?id=18147aec930d05fa4f08126ca288d56c7c483512-12753081-images-thumbs&n=13',
    description:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
  },
];

export default function Products() {
  const [products, setProducts] = useState(PRODUCTS_MOCK);
  const target = useRef();

  const observerCallback = (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => {
    const [target] = entries;

    if (!target.isIntersecting) return;

    setProducts((products: Array<unknown>) => {
      const duplicates = JSON.parse(JSON.stringify(products));

      duplicates.push({
        id: products.length + 1,
        title: 'kilian angels share',
        url: 'https://marso-perfume.ru/wp-content/uploads/2023/10/marso-u232-angels-share-by-kilian.jpg',
        description:
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, ',
      });

      observer.disconnect();

      return duplicates;
    });
  };

  const observer = useObserver(observerCallback);

  useEffect(() => {
    observer.observe(target.current);
  });

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            ref={target}
            title={product.title}
            url={product.url}
            description={product.description}
          />
        );
      })}
    </div>
  );
}
