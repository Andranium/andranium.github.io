import React, { FormEvent, useState } from 'react';
import Modal from '../Modal/Modal';

export default function ModalButton() {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <>
      <input
        placeholder="Текст модалки"
        value={text}
        onInput={(e: FormEvent<HTMLInputElement>) => setText((e.target as HTMLInputElement).value)}
      />

      <button
        onClick={() => {
          setModal((state) => !state);
        }}
      >
        toggle modal
      </button>

      <Modal shown={modal}>{text}</Modal>
    </>
  );
}
