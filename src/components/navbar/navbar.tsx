"use client";

import styles from "@/components/navbar/navbar.module.scss";
import Menubar from "@/icons/menubar";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <p>FindingSeoul</p>
      <div>
        <Menubar width={24} height={24} />
      </div>
    </div>
  );
}
