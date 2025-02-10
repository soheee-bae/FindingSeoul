"use client";

import { usePlacesByStation } from "@/apis/places/queries";
import { useParams, useSearchParams } from "next/navigation";

export default function PlaceContent() {
  const params = useParams();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const { data: places } = usePlacesByStation(
    { station: params.station, type },
    {
      enabled: !!params.station,
    }
  );
  console.log(params);
  console.log(places);
  const categories = places?.map((place) => place.category).flat();
  const cat = categories?.filter(function (item, pos) {
    return categories.indexOf(item) == pos;
  });
  console.log(cat);

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
