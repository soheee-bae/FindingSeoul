"use client";
import styles from "./emptyPlaces.module.scss";

export default function EmptyPlaces() {
  return (
    <div className={styles.container}>
      <p>검색 결과가 없습니다 😥</p>
    </div>
  );
}
