"use client";

import { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { usePlacesByStation } from "@/apis/places/queries";
import { EmptyPlaces, PlaceCard } from "@/components";
import { Place as PlaceCardInterface } from "@/interfaces/places";
import styles from "./page.module.scss";
import PlacesHeader from "@/components/places/placesHeader/placesHeader";
import { DEFAULT_TYPE, DEFAULT_SITESORT } from "@/data/categories";

export default function Places() {
  const params = useParams();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as string) || DEFAULT_TYPE;
  // const siteSort = Number(searchParams.get("siteSort")) || DEFAULT_SITESORT;

  const [search, setSearch] = useState<string>();

  const {
    data: places = [],
    isLoading,
    isFetching,
    isFetched,
  } = usePlacesByStation({
    station: params?.station as string,
    type,
    // siteSort,
    search,
  });

  return (
    <div className={styles.container}>
      <PlacesHeader setSearch={setSearch} />
      {isLoading || isFetching ? (
        <div>Loading....</div>
      ) : places && places.length > 0 && isFetched ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {places?.map((place: PlaceCardInterface) => (
            <PlaceCard place={place} key={place.name} />
          ))}
        </div>
      ) : (
        <EmptyPlaces />
      )}
    </div>
  );
}
