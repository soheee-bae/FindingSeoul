"use client";

import { usePlacesByStation } from "@/apis/places/queries";
import EmptyPlaces from "@/components/places/emptyPlaces/emptyPlaces";
import PlaceCard from "@/components/places/placeCard/placeCard";
import SearchField from "@/components/searchField/searchField";
import { Place as PlaceCardInterface } from "@/interfaces/places";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

const DEFAULT_TYPE = "음식점";

export default function Place() {
  const params = useParams();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as string) || DEFAULT_TYPE;

  const [search, setSearch] = useState<string>();

  const {
    data: places = [],
    isLoading,
    isFetching,
    isFetched,
  } = usePlacesByStation({
    station: params?.station as string,
    type: search || type,
  });

  return (
    <div>
      <SearchField setSearch={setSearch} />
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
