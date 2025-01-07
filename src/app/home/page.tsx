"use client";

import styles from "@/app/home/home.module.scss";
import HomeMap from "@/components/homeMap/homeMap";

export default function Home() {
  return (
    <div className={styles.root}>
      <HomeMap />
    </div>
  );
}
