"use client";

import { useContext } from "react";
import styles from "./placesHeader.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { ChevronLeft, FilterIcon, SearchIcon, TitleBackground } from "@/icons";
import { SEOUL_DISTRICTS } from "@/data/districts";
import { SearchField, SideBar, BaseCategories } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_TYPE, DEFAULT_SITESORT } from "@/data/categories";

interface PlacesHeaderProps {
  setSearch: (search: string) => void;
}

export default function PlacesHeader(props: PlacesHeaderProps) {
  const { setSearch } = props;
  const { selectedStation, district } = useContext(DistrictContext);

  const router = useRouter();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as string) || DEFAULT_TYPE;
  const siteSort = Number(searchParams.get("siteSort")) || DEFAULT_SITESORT;

  const districtImg = SEOUL_DISTRICTS.find(
    (d) => d.name === district
  )?.mapImage;

  const handleRedirect = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleRedirect}>
        <ChevronLeft height={18} width={18} />
      </button>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.names}>
            <p className={styles.title}>{district}</p>
            <p>{selectedStation}역</p>
            <TitleBackground />
          </div>
          <div className={styles.fieldsContent}>
            <div className={styles.fields}>
              <SearchField
                setSearch={setSearch}
                startIcon={<SearchIcon width={18} height={18} />}
              />
              <SideBar
                button={
                  <button className={styles.filterButton}>
                    <FilterIcon width={18} height={18} />
                  </button>
                }
                content={<div>Hello!!</div>}
                direction="left"
              />
            </div>
            <BaseCategories />
          </div>
        </div>
        <div className={styles.img}>{districtImg}</div>
      </div>
    </div>
  );
}
