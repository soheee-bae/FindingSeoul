"use client";

import { Place } from "@/interfaces/places";
import styles from "./placeCard.module.scss";
interface PlaceCardProps {
  place: Place;
}

export default function PlaceCard(props: PlaceCardProps) {
  const { place } = props;
  return (
    <div key={place.id} className={styles.card}>
      <img src={place.thumUrl} />
      <div className={styles.content}>
        <h5>{place.display || place.name}</h5>
        <p>{place.description}</p>
      </div>
      {/* <p>{place.abbrAddress}</p>
      <p>{place.address}</p>
      <p>{place.bizhourInfo}</p>
      <div>
        {place.category.map((category, idx) => (
          <p key={idx}>{category}</p>
        ))}
      </div>
      
      <p>{place.homePage}</p>
      <p>{place.telDisplay || place.tel}</p> */}

      {/* <p>{place.menuInfo}</p> */}
    </div>
  );
}
