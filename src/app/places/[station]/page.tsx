"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { usePlacesByStation } from "@/apis/places/queries";
import { EmptyPlaces, PlaceCard } from "@/components";
import { Place as PlaceCardInterface } from "@/interfaces/places";
import styles from "./page.module.scss";
import PlacesHeader from "@/components/places/placesHeader/placesHeader";
import { DEFAULT_TYPE, DEFAULT_SITESORT } from "@/data/categories";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { redirect } from "next/navigation";
import PlacesCardsSkeleton from "@/components/skeleton/placesCardsSkeleton";

export default function Places() {
  const { station } = useParams<{ station: string }>();
  // const siteSort = Number(searchParams.get("siteSort")) || DEFAULT_SITESORT;

  const [search, setSearch] = useState<string>();
  const { item: sessionSelectedStation, setItem: setSessionSelectedStation } =
    useSessionStorage("selectedStation");
  const { item: sessionDistrict } = useSessionStorage("district");

  const {
    data: places = [],
    isLoading,
    isFetching,
  } = usePlacesByStation({
    station: station,
    // siteSort,
    baseCategory: DEFAULT_TYPE,
    search,
  });

  const loading = isLoading || isFetching;

  useEffect(() => {
    if (!sessionDistrict) {
      redirect("/");
    }
  }, [sessionDistrict]);

  useEffect(() => {
    if (!sessionSelectedStation) setSessionSelectedStation(decodeURI(station));
  }, [sessionSelectedStation, setSessionSelectedStation, station]);

  return (
    <div className={styles.container}>
      <PlacesHeader setSearch={setSearch} />
      {!loading ? (
        <div className={styles.content}>
          {[...Array(9)].map((_u) => (
            <PlacesCardsSkeleton key={_u} />
          ))}
        </div>
      ) : places && places.length > 0 ? (
        <div className={styles.content}>
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
