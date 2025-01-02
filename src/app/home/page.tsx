"use client";

import { SEOUL_DISTRICTS } from "@/data/districts";
import styles from "@/app/home/home.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { useContext } from "react";

export default function Home() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);

  return (
    <div className={styles.root}>
      {SEOUL_DISTRICTS.map((district) => (
        <p onClick={() => setDistrict(district)} key={district}>
          {district}
        </p>
      ))}
      {stations.length > 0 &&
        stations.map((station) => (
          <div key={station}>
            <p>{station}</p>
          </div>
        ))}
      {subwayLines.map((subway) => (
        <p key={subway}> {subway}</p>
      ))}
    </div>
  );
}
