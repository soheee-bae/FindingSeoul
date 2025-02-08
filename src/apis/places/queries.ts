import { useQuery } from "@tanstack/react-query";
import { getPlacesByStation } from "./queryfns";
import { places } from "./queryKeys";

export function usePlacesByStation(
  station: string,
  type?: string,
  displayCount?: number
) {
  return useQuery({
    queryKey: places.getPlacesByStation(station).queryKey,
    queryFn: () => getPlacesByStation(station, type, displayCount),
    enabled: !!station,
  });
}
