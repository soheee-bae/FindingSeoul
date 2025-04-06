"use client";

import React, { ReactNode } from "react";
import styles from "./districtImage.module.scss";
import DistrictImgBackground from "@/icons/background/districtImgBackground";
import { MapPin } from "@/icons";

interface DistrictImageProps {
  imageUrl: ReactNode;
}

export default function DistrictImage(props: DistrictImageProps) {
  const { imageUrl } = props;

  const districtImg = React.cloneElement(imageUrl as React.ReactElement, {
    height: 213,
    className: styles.img,
  });

  return (
    <div className={styles.container}>
      {districtImg}
      <DistrictImgBackground className={styles.background} height={240} />
      <MapPin className={styles.mappin} height={47} />
    </div>
  );
}
