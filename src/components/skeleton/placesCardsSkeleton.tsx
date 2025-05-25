"use client";

import styles from "./skeleton.module.scss";

export default function PlacesCardsSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.img} />
      <div className={styles.cardContent}>
        <div className={styles.text} />
        <div className={styles.text} />
      </div>
    </div>
  );
}
