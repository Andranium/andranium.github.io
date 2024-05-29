import React, { useState } from 'react';
import styles from './SliderRange.module.scss';

export default function SliderRange() {
  const [slider, setSlider] = useState(0);

  function setSlideValue(e: any) {
    setSlider(e.target.value);
  }

  return (
    <div className={styles.sliderRange}>
      <input type="range" defaultValue={slider} onChange={setSlideValue} />

      <label className={styles.sliderRange_label}>{slider} %</label>
    </div>
  );
}
