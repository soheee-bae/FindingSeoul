export type PlacesProps = {
  station: string;
  displayCount?: number;
  siteSort?: number;
} & (
  | {
      baseCategory?: string;
      subCategory?: string;
      search?: never;
    }
  | {
      baseCategory?: never;
      subCategory?: never;
      search?: string;
    }
);

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
  menuInfo?: {
    id: number;
    name: string;
    price: string;
  };
  homePage?: string;
  naverBookingUrl?: string;
  tel?: string;
  telDisplay?: string;
  x: number;
  y: number;
}
