"use client";

import { useContext } from "react";
import styles from "./placesHeader.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { ChevronLeft, Menubar } from "@/icons";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { SearchField, SideBar, BaseCategories } from "@/components";

interface PlacesHeaderProps {
  setSearch: (search: string) => void;
}

export default function PlacesHeader(props: PlacesHeaderProps) {
  const { setSearch } = props;
  const { selectedStation, district } = useContext(DistrictContext);

  const districtImg = SEOUL_DISTRICTS.find(
    (d) => d.name === district
  )?.mapImage;
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <ChevronLeft height={18} width={18} />
      </button>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.names}>
            <p>{district}</p>
            <p>{selectedStation}</p>
          </div>
          <div className={styles.innerContent}>
            <SearchField setSearch={setSearch} />
            <SideBar
              button={<Menubar width={24} height={24} />}
              content={<div>Hello!!</div>}
              direction="left"
            />
          </div>
          <BaseCategories />
        </div>
        <div className={styles.img}>{districtImg}</div>
      </div>
    </div>
  );
}
