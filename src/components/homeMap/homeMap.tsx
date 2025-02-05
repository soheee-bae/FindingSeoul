"use client";

import styles from "@/components/homeMap/homeMap.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function HomeMap() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);
  const router = useRouter();

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
      <div className={styles.info}>
        <p>{district}</p>
        <div>
          {stations.map((station) => (
            <p
              key={station}
              onClick={() => {
                router.push(`/places`);
              }}
              style={{ cursor: "pointer" }}
            >
              {station}
            </p>
          ))}
        </div>
        <div>
          {subwayLines.map((lines) => (
            <p key={lines}>{lines}호선</p>
          ))}
        </div>
      </div>
    </div>
  );
}
