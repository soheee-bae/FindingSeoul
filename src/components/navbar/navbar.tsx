"use client";

import { Logo } from "@/components";
import styles from "./navbar.module.scss";
import { Menubar } from "@/icons";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div>
        <Menubar width={24} height={24} />
      </div>
    </div>
  );
}
