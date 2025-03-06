"use client";

import { usePlacesByStation } from "@/apis/places/queries";
import SearchField from "@/components/searchField/searchField";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

const DEFAULT_TYPE = "음식점";

export default function Place() {
  const params = useParams();
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as string) || DEFAULT_TYPE;

  const [search, setSearch] = useState<string>();

  console.log("search : " + search);

  const { data: places = [] } = usePlacesByStation({
    station: params?.station as string,
    type: search || type,
  });

  console.log(places);

  // const categories = places?.map((place) => place.category).flat();
  // const cat = categories?.filter(function (item, pos) {
  //   return categories.indexOf(item) == pos;
  // });

  return (
    <div>
      <SearchField setSearch={setSearch} />
      <div>
        <div>음식점</div>
        <div>카페</div>
      </div>
      {places?.map((place) => {
        return (
          <div
            key={place.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
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
            <img width={10} height={10} src={place.thumUrl} />
            <p>{place.menuInfo}</p>
          </div>
        );
      })}
    </div>
  );
}

// Categpries

// 음식점, 카페

// 음식 종류
// 한식, 양식, 중식, 분식, 카페 & 디저트, 일식
