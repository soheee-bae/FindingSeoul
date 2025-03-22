"use client";

import { Place } from "@/interfaces/places";
import styles from "./placesHeader.module.scss";

interface PlacesHeaderProps {
  place: Place;
}

export default function PlacesHeader(props: PlacesHeaderProps) {
  const { place } = props;
  return (
    <div>
      <button className={styles.backButton}></button>
    </div>
  );
}
