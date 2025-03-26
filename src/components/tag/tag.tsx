"use client";

import { ReactNode } from "react";
import styles from "./tag.module.scss";
import clsx from "clsx";

interface TagProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function Tag(props: TagProps) {
  const { text, icon, className, onClick } = props;
  return (
    <div
      className={clsx(styles.tag, icon && styles.iconTag, className)}
      onClick={onClick}
    >
      <p>{text}</p>
      {icon}
    </div>
  );
}
