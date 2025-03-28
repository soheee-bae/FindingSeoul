import { useQuery } from "@tanstack/react-query";
import { getPlacesByStation } from "./queryfns";
import { places } from "./queryKeys";
import { PlacesProps } from "@/interfaces/places";

export function usePlacesByStation(params: PlacesProps) {
  return useQuery({
    queryKey: places.getPlacesByStation(params).queryKey,
    queryFn: () => getPlacesByStation(params),
    enabled: !!params?.station,
  });
}
