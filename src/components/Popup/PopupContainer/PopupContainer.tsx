import React from 'react';
import ReactDom from 'react-dom';
import styles from './PopupContainer.module.scss';

type TProps = {
  children: string;
  popup: {
    visible: boolean;
    top: number;
    left: number;
  };
};

export default function PopupContainer({ children, popup }: TProps) {
  const dynamicStyles = {
    left: popup.left,
    top: popup.top,
  };

  return ReactDom.createPortal(
    <div className={styles.popupContainer} style={dynamicStyles}>
      {children}
    </div>,
    document.body
  );
}
