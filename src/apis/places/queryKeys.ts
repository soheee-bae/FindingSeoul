import { PlacesProps } from "@/interfaces/places";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const places = createQueryKeys("places", {
  getPlacesByStation: (params: PlacesProps) => ({
    queryKey: [params],
  }),
});
