import { createQueryKeys } from "@lukemorales/query-key-factory";

export const stations = createQueryKeys("stations", {
  getPlacesByStation: null,
  getPlaceById: (countryId: number) => ({
    queryKey: [countryId],
  }),
});
