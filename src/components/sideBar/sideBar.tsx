"use client";

import styles from "./sideBar.module.scss";
import { ReactNode, useState } from "react";
import clsx from "clsx";

interface SideBarProps {
  button: ReactNode;
  content: ReactNode;
  className?: string;
  direction?: "left" | "right";
}

export default function SideBar(props: SideBarProps) {
  const { button, content, className, direction = "right" } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(!isOpen)}>{button}</div>
      <div className={clsx(styles.content, isOpen && styles.openContent)}>
        <div onClick={() => setIsOpen(!isOpen)}>{button}</div>

        {content}
      </div>
    </div>
  );
}
