import { useQuery } from "@tanstack/react-query";
import { getPlacesByStation } from "./queryfns";

export function usePlacesByStation(
  station: string,
  type?: string,
  displayCount?: number
) {
  return useQuery({
    queryKey: ["places", station],
    queryFn: () => getPlacesByStation(station, type, displayCount),
    enabled: !!station,
  });
}
