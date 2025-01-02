"use client";

import { useStationsByDistrict } from "@/apis/stations/queries";
import { Station } from "@/interfaces/stationsInterface";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export type DistrictContextContent = {
  district: string;
  setDistrict: (district: string) => void;
  stations: string[];
  setStations: (stations: string[]) => void;
  subwayLines: string[];
  setSubwayLines: (subwayLines: string[]) => void;
};

const DistrictContext = createContext<DistrictContextContent>({
  district: "",
  setDistrict: () => undefined,
  stations: [],
  setStations: () => undefined,
  subwayLines: [],
  setSubwayLines: () => undefined,
});

interface DistrictContextProps {
  children: ReactNode;
}

function DistrictContextProvider(props: DistrictContextProps) {
  const { children } = props;

  const [district, setDistrict] = useState<string>("");
  const [stations, setStations] = useState<string[]>([]);
  const [subwayLines, setSubwayLines] = useState<string[]>([]);

  const { data: stationsData } = useStationsByDistrict(district);

  useEffect(() => {
    if (stationsData) {
      const stations = stationsData.stations.map((sub: Station) => sub.name);
      const subwayLines = stationsData.stations.map(
        (sub: Station) => sub.subwayLine
      );
      const filteredSubwayLines = subwayLines.filter(
        (sub: string, idx: number) => subwayLines.indexOf(sub) === idx
      );

      setStations(stations);
      setSubwayLines(filteredSubwayLines);
    }
  }, [district, stationsData]);

  return (
    <DistrictContext.Provider
      value={{
        district,
        setDistrict,
        stations,
        setStations,
        subwayLines,
        setSubwayLines,
      }}
    >
      {children}
    </DistrictContext.Provider>
  );
}

export default DistrictContext;
export { DistrictContextProvider };
