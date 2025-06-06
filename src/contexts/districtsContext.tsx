"use client";

import { useStationsByDistrict } from "@/apis/stations/queries";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { Station, StationsPerLine } from "@/interfaces/stationsInterface";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export type DistrictContextContent = {
  district: string;
  setDistrict: (district: string) => void;
  stations: string[];
  setStations: (stations: string[]) => void;
  subwayLines: string[];
  setSubwayLines: (subwayLines: string[]) => void;
  stationsPerSubwayline: StationsPerLine[];
  selectedStation: string;
  setSelectdStation: (district: string) => void;
};

const DistrictContext = createContext<DistrictContextContent>({
  district: "",
  setDistrict: () => undefined,
  stations: [],
  setStations: () => undefined,
  subwayLines: [],
  setSubwayLines: () => undefined,
  stationsPerSubwayline: [],
  selectedStation: "",
  setSelectdStation: () => undefined,
});

interface DistrictContextProps {
  children: ReactNode;
}

function DistrictContextProvider(props: DistrictContextProps) {
  const { children } = props;

  const { item: sessionDistrict, setItem: setSessionDistrict } =
    useSessionStorage("district");
  const { item: sessionSelectedStation, setItem: setSessionSelectedStation } =
    useSessionStorage("selectedStation");

  const [district, setDistrict] = useState<string>(sessionDistrict || "");
  const [selectedStation, setSelectdStation] = useState<string>(
    sessionSelectedStation || ""
  );
  const [stations, setStations] = useState<string[]>([]);
  const [subwayLines, setSubwayLines] = useState<string[]>([]);
  const [stationsPerSubwayline, setStationsPerSubwayline] = useState<
    StationsPerLine[]
  >([]);

  const { data: stationsData } = useStationsByDistrict(district);

  console.log(stationsData);
  useEffect(() => {
    if (sessionSelectedStation && !selectedStation)
      setSelectdStation(sessionSelectedStation);
  }, [selectedStation, sessionSelectedStation]);

  useEffect(() => {
    if (stationsData) {
      const stations = stationsData.stations.map((sub: Station) =>
        sub.name.trim()
      );
      const subwayLines = stationsData.stations.map(
        (sub: Station) => sub.subwayLine
      );
      const filteredSubwayLines = subwayLines.filter(
        (sub: string, idx: number) => subwayLines.indexOf(sub) === idx
      );

      const stationsPerSubwayline = filteredSubwayLines.map((line: number) => {
        const data = stationsData.stations.filter(
          (sub: Station) => sub.subwayLine === line
        );
        return {
          subwayLine: line,
          stations: data,
        };
      });

      setStations(stations);
      setSubwayLines(filteredSubwayLines);
      setStationsPerSubwayline(stationsPerSubwayline);
    }
  }, [stationsData]);

  useEffect(() => {
    if (district !== sessionDistrict) {
      setSessionDistrict(district);
    }
  }, [district, sessionDistrict, setSessionDistrict]);

  useEffect(() => {
    if (selectedStation !== sessionSelectedStation) {
      setSessionSelectedStation(decodeURI(selectedStation));
    }
  }, [selectedStation, sessionSelectedStation, setSessionSelectedStation]);

  return (
    <DistrictContext.Provider
      value={{
        district,
        setDistrict,
        stations,
        setStations,
        subwayLines,
        setSubwayLines,
        stationsPerSubwayline,
        selectedStation,
        setSelectdStation,
      }}
    >
      {children}
    </DistrictContext.Provider>
  );
}

export default DistrictContext;
export { DistrictContextProvider };
