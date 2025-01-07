"use client";

import styles from "@/app/home/home.module.scss";
import HomeMap from "@/components/homeMap/homeMap";

export default function Home() {
  return (
    <div className={styles.root}>
      {/* {stations.length > 0 &&
        stations.map((station) => (
          <p onClick={onStationClick} key={station}>
            {station}
          </p>
        ))}
      {subwayLines.map((subway) => (
        <p key={subway}> {subway}</p>
      ))} */}
      <HomeMap />
    </div>
  );
}
