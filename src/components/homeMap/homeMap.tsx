"use client";

import styles from "./homeMap.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { WholeMap } from "@/icons";
import { District } from "@/interfaces/district";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function HomeMap() {
  const { stations, district, setDistrict, subwayLines, setSelectdStation } =
    useContext(DistrictContext);
  const router = useRouter();

  const handleStationClick = (station: string) => {
    setSelectdStation(station);
    router.push(`/places/${station}`);
  };

  const handleDistrictClick = (district: District) => {
    setDistrict(district.name);
    // window.history.pushState(null, "", `/${district.name}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <WholeMap width={1200} />
        <div>
          <div className={styles.districtMaps}>
            {SEOUL_DISTRICTS.map((district) => (
              <div
                onClick={() => handleDistrictClick(district)}
                key={district.name}
                className={styles.districtMap}
                style={{ left: district?.x, top: district?.y }}
              >
                {district.mapImage}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.info}>
        <p>{district}</p>
        <div>
          {stations.map((station) => (
            <p
              key={station}
              onClick={() => {
                handleStationClick(station);
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
      </div> */}
    </div>
  );
}
