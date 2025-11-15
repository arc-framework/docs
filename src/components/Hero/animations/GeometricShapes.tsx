import React from 'react';

import wrapperStyles from './AnimationWrapper.module.css';
import styles from './GeometricShapes.module.css';

export default function GeometricShapes(): React.JSX.Element {
  return (
    <div className={wrapperStyles.animationContainer}>
      <div className={styles.shapesContainer}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
        <div className={styles.shape4} />
        <div className={styles.shape5} />
        <div className={styles.shape6} />
      </div>
    </div>
  );
}
