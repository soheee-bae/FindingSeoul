"use client";

import { usePlacesByStation } from "@/apis/places/queries";
import { useParams } from "next/navigation";

export default function Place() {
  const params = useParams();
  const { data: places } = usePlacesByStation(params, {
    enabled: !!params.station,
  });
  console.log(places);

  return (
    <div>
      {places?.map((place) => {
        return (
          <div
            key={place.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              border: "1px solid gray",
              padding: "10px",
              borderRadius: 10,
            }}
          >
            <h5>{place.display || place.name}</h5>
            <p>{place.abbrAddress}</p>
            <p>{place.address}</p>
            <p>{place.bizhourInfo}</p>
            <div>
              {place.category.map((category, idx) => (
                <p key={idx}>{category}</p>
              ))}
            </div>
            <p>{place.description}</p>
            <p>{place.homePage}</p>

            <p>{place.telDisplay || place.tel}</p>
            <img src={place.thumUrl} />
            <p>{place.menuInfo}</p>
          </div>
        );
      })}
    </div>
  );
}
