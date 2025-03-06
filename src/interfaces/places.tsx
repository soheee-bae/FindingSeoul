export interface PlacesProps {
  station: string;
  type?: string;
  displayCount?: number;
}

export interface Place {
  id: number;
  name: number;
  abbrAddress: string;
  address: string;
  roadAddress: string;
  bizhourInfo: string;
  broadcastInfo?: {
    menu: string;
    name: string;
  };
  hasBroadcastInfo: boolean;
  category: string[];
  description?: string;
  display?: string;
  distance: number;
  thumUrl: string;
  menuInfo: string[];
  homePage?: string;
  naverBookingUrl?: string;
  tel?: string;
  telDisplay?: string;
  x: number;
  y: number;
}
