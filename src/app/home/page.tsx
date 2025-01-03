"use client";

import { SEOUL_DISTRICTS } from "@/data/districts";
import styles from "@/app/home/home.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { stations, district, setDistrict, subwayLines } =
    useContext(DistrictContext);
  const router = useRouter();

  const onStationClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.root}>
      {SEOUL_DISTRICTS.map((district) => (
        <p onClick={() => setDistrict(district)} key={district}>
          {district}
        </p>
      ))}
      {stations.length > 0 &&
        stations.map((station) => (
          <p onClick={onStationClick} key={station}>
            {station}
          </p>
        ))}
      {subwayLines.map((subway) => (
        <p key={subway}> {subway}</p>
      ))}
    </div>
  );
}
