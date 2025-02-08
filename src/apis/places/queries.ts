import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getPlacesByStation } from "./queryfns";
import { places } from "./queryKeys";
import { PlacesProps } from "./placesInterface";

export function usePlacesByStation(
  params: PlacesProps,
  options?: UseQueryOptions
) {
  return useQuery({
    queryKey: places.getPlacesByStation(params?.station).queryKey,
    queryFn: () => getPlacesByStation(params),
    enabled: !!options?.enabled,
  });
}
