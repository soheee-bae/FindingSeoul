import { useQuery } from "@tanstack/react-query";
import { getStationsByDistrict } from "./queryfns";
import { stations } from "./queryKeys";

export function useStationsByDistrict(district?: string) {
  return useQuery({
    queryKey: stations.getStationsByDistrict(district).queryKey,
    queryFn: () => getStationsByDistrict(district),
    enabled: !!district,
  });
}
