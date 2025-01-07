import { ReactNode } from "react";

export interface District {
  name: string;
  mapImage: ReactNode;
  x?: number;
  y?: number;
}
