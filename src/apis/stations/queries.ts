import { useQuery } from "@tanstack/react-query";
import { getStationsByArea } from "./queryfns";

export function useStationsByArea(area?: string) {
  return useQuery({
    queryKey: ["stations", area],
    queryFn: () => getStationsByArea(area),
    enabled: !!area,
  });
}
