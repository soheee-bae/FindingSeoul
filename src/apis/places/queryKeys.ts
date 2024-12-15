import { createQueryKeys } from "@lukemorales/query-key-factory";

export const places = createQueryKeys("places", {
  getLocationCountries: null,
  getLocationStates: (countryId: number) => ({
    queryKey: [countryId],
  }),
});
