import { createQueryKeys } from "@lukemorales/query-key-factory";

export const places = createQueryKeys("places", {
  getPlacesByStation: null,
  getPlaceById: (countryId: number) => ({
    queryKey: [countryId],
  }),
});
