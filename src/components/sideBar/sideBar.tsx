"use client";

import styles from "./sideBar.module.scss";
import { ReactNode, useState, useRef } from "react";
import { motion } from "framer-motion";

interface SideBarProps {
  button: ReactNode;
  content: ReactNode;
  className?: string;
  direction?: "left" | "right";
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function SideBar(props: SideBarProps) {
  const { button, content, className, direction = "right" } = props;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      {content}
      <div onClick={() => setIsOpen(!isOpen)}>{button}</div>
    </motion.nav>
  );
}
