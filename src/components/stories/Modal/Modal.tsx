import React, { useRef, useEffect } from 'react';
import styles from './Modal.module.scss';

export default function Modal({
  shown,
  darkMode,
  children,
}: {
  shown?: boolean;
  darkMode?: boolean;
  children?: unknown;
}) {
  const modal = useRef(null);

  function showModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  useEffect(() => {
    if (shown) showModal();
  }, [shown]);

  return (
    <>
      <dialog ref={modal} className={`${styles.modal} ${darkMode && styles['modal--dark']}`}>
        <h2 className={styles.modalTitle}>Привет !</h2>

        <p className={styles.modalContent}>
          Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый
          кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их
          труду ежегодно сотни питомцев находят свой новый дом.
          {children}
        </p>

        <div className={styles.modalFooter}>
          <button className={styles.modalBtn} onClick={closeModal}>
            close
          </button>
        </div>
      </dialog>
    </>
  );
}
