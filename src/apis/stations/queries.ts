import { useQuery } from "@tanstack/react-query";
import { getStationsByDistrict } from "./queryfns";

export function useStationsByDistrict(district?: string) {
  return useQuery({
    queryKey: ["stations", district],
    queryFn: () => getStationsByDistrict(district),
    enabled: !!district,
  });
}
