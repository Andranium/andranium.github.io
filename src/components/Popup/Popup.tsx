import React, { useState, MouseEvent } from 'react';
import styles from './Popup.module.scss';
import PopupContainer from './PopupContainer/PopupContainer';

type TProps = {
  children: string;
};

export default function Popup({ children = 'content' }: TProps) {
  const [popupState, setPopupState] = useState({
    visible: false,
    top: 0,
    left: 0,
  });

  function triggerPopup(e: MouseEvent<HTMLDivElement>) {
    const { target } = e;

    const { x, y, height } = (target as HTMLDivElement).getBoundingClientRect();

    const top = y + height;
    const left = x;

    setPopupState(() => {
      return { visible: true, top, left };
    });
  }

  function closePopup() {
    setPopupState((prevVal) => {
      return { ...prevVal, visible: false };
    });
  }

  return (
    <div className={styles.popup}>
      <div onMouseEnter={triggerPopup} onMouseLeave={closePopup} className={styles.popup_trigger}>
        trigger
      </div>

      {popupState.visible && <PopupContainer popup={popupState}>{children}</PopupContainer>}
    </div>
  );
}
