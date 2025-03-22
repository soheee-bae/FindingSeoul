"use client";

import { Logo, SideBar } from "@/components";
import styles from "./navbar.module.scss";
import { Menubar } from "@/icons";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <SideBar
        button={<Menubar width={24} height={24} />}
        content={<div>Hello!!</div>}
        direction="left"
      />
    </div>
  );
}
