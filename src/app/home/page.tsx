"use client";

import styles from "@/app/home/home.module.scss";
import HomeMap from "@/components/homeMap/homeMap";
import HomeLayout from "./layout";

export default function Home() {
  return (
    <HomeLayout>
      <HomeMap />
    </HomeLayout>
  );
}
