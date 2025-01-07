"use client";

import styles from "@/components/homeMap/homeMap.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { useContext } from "react";

export default function HomeMap() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);

  return (
    <div className={styles.root}>
      {SEOUL_DISTRICTS.map((district) => (
        <p onClick={() => setDistrict(district.name)} key={district.name}>
          {district.mapImage}
        </p>
      ))}
    </div>
  );
}
