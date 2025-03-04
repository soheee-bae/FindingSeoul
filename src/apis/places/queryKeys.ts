import { createQueryKeys } from "@lukemorales/query-key-factory";

export const places = createQueryKeys("places", {
  getPlacesByStation: (station: string, type?: string) => ({
    queryKey: [station, type],
  }),
});
