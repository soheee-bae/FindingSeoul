"use client";

import styles from "@/components/homeMap/homeMap.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { WholeMap } from "@/icons";
import { useContext } from "react";

export default function HomeMap() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);

  return (
    <div className={styles.root}>
      <div className={styles.baseMap}>
        <WholeMap />
      </div>
      {SEOUL_DISTRICTS.map((district) => (
        <div
          onClick={() => setDistrict(district.name)}
          key={district.name}
          className={styles.districtMap}
        >
          {district.mapImage}
        </div>
      ))}
    </div>
  );
}
