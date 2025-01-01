"use client";

import React, { createContext, ReactNode, useState } from "react";

export type StationContextContent = {
  station: string;
  setStation: (station: string) => void;
};

const StationContext = createContext<StationContextContent>({
  station: "",
  setStation: () => undefined,
});

interface StationContextProps {
  children: ReactNode;
}

function StationContextProvider(props: StationContextProps) {
  const { children } = props;

  const [station, setStation] = useState<string>("");

  return (
    <StationContext.Provider
      value={{
        station,
        setStation,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}

export default StationContext;
export { StationContextProvider };
