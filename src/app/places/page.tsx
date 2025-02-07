"use client";

import { usePlacesByStation } from "@/apis/places/queries";
// import { usePlaces } from "@/apis/places/queries";
import { useQueryClient } from "@tanstack/react-query";

// interface PlacesProps {
//   location: string;
// }

export default function Places() {
  const { data: placesData } = usePlacesByStation(station);

  console.log(placesData);
  return <div>Places page</div>;
}
