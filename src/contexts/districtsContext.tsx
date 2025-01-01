"use client";

import { useStationsByDistrict } from "@/apis/stations/queries";
import { Stations } from "@/interfaces/stationsInterface";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export type DistrictContextContent = {
  district: string;
  setDistrict: (district: string) => void;
  stations: Stations;
  setStations: (stations: Stations) => void;
};

const DistrictContext = createContext<DistrictContextContent>({
  district: "",
  setDistrict: () => undefined,
  stations: {
    totalCount: 0,
    name: "",
    stations: [],
  },
  setStations: () => undefined,
});

interface DistrictContextProps {
  children: ReactNode;
}

function DistrictContextProvider(props: DistrictContextProps) {
  const { children } = props;

  const [district, setDistrict] = useState<string>("");
  const [stations, setStations] = useState<Stations>({
    totalCount: 0,
    name: "",
    stations: [],
  });

  const { data: stationsData } = useStationsByDistrict(district);

  console.log(district);
  console.log(stationsData);
  console.log(stations);

  useEffect(() => {
    setStations(stationsData);
  }, [district, stationsData]);

  return (
    <DistrictContext.Provider
      value={{
        district,
        setDistrict,
        stations,
        setStations,
      }}
    >
      {children}
    </DistrictContext.Provider>
  );
}

export default DistrictContext;
export { DistrictContextProvider };
