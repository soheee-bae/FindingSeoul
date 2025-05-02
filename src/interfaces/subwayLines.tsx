import { ReactNode } from "react";

export interface SubwayLine {
  line: string;
  image: ReactNode;
  x?: number;
  y?: number;
}
