"use client";

import { Logo } from "@/components";
import styles from "./navbar.module.scss";
import { Menubar } from "@/icons";
import SideBar from "../sideBar/sideBar";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <SideBar
        button={<Menubar width={24} height={24} />}
        content={<div>Hello!!</div>}
      />
    </div>
  );
}
