import { useQuery } from "@tanstack/react-query";
import { getPlacesByLocation } from "./queryfns";

export function usePlacesByStation(station?: string, displayCount?: number) {
  return useQuery({
    queryKey: ["places", station],
    queryFn: () => getPlacesByLocation(search),
    enabled: !!station,
  });
}

export function usePlaceById(search?: string) {
  return useQuery({
    queryKey: ["place", search],
    queryFn: () => getPlacesByLocation(search),
  });
}
station;
