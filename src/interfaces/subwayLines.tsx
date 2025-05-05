import { ReactNode } from "react";

export interface SubwayLine {
  line: string;
  image: ReactNode;
  name: string;
  x?: number;
  y?: number;
}
