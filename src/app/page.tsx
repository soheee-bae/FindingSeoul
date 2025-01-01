import { DistrictContextProvider } from "@/contexts/districtsContext";
import Home from "./home/page";
import { StationContextProvider } from "@/contexts/stationContext";

export default function Page() {
  return (
    <DistrictContextProvider>
      <StationContextProvider>
        <Home />
      </StationContextProvider>
    </DistrictContextProvider>
  );
}
