export interface Station {
  name: string;
  subwayLine: number;
}

export interface Stations {
  totalCount: number;
  name: string;
  stations: Station[];
}

export interface StationsPerLine {
  subwayLine: number;

  stations: Station[];
}
