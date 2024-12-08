import { useQuery } from "@tanstack/react-query";
import { getPlacesByLocation } from "./queryfns";

export function usePlacesByLocation(search?: string) {
  return useQuery({
    queryKey: ["places", search],
    queryFn: () => getPlacesByLocation(search),
  });
}

// export function usePlaceById(id?: number) {
//   return useQuery({ queryKey: ["place"], queryFn: getPlace(id) });
// }
