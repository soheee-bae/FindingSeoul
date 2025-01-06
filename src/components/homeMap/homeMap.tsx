"use client";

import styles from "@/components/homeMap/homeMap.module.scss";
import { WholeMap, Dobonggu } from "@/icons/index";

export default function HomeMap() {
  return (
    <div className={styles.root}>
      <WholeMap />
      <Dobonggu />
    </div>
  );
}
