import { createQueryKeys } from "@lukemorales/query-key-factory";

export const stations = createQueryKeys("stations", {
  getStationsByDistrict: (district?: string) => ({
    queryKey: [district],
  }),
});
