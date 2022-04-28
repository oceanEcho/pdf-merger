import React from 'react';
import { Merger } from './Merger';

import styles from './styles.module.scss';

export const Home = () => {
  return (
    <section className={styles.Home}>
      <h1>PDF Merger</h1>
      <p>Merge PDF files</p>
      <Merger />
    </section>
  );
};
