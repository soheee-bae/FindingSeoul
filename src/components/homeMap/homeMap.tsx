"use client";

import styles from "@/components/homeMap/homeMap.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { WholeMap, Dongdaemungu } from "@/icons";
import { relative } from "path";
import { useContext } from "react";

export default function HomeMap() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);

  return (
    <div className={styles.root}>
      <div className={styles.map}>
        {/* <WholeMap /> */}
        {SEOUL_DISTRICTS.map((district) => (
          <div
            onClick={() => setDistrict(district.name)}
            key={district.name}
            className={styles.districtMap}
            style={{ left: district?.x, top: district?.y }}
          >
            {district.mapImage}
          </div>
        ))}
      </div>
    </div>
  );
}
