"use client";

import React, { ReactNode } from "react";
import styles from "./districtImage.module.scss";

interface DistrictImageProps {
  imageUrl: ReactNode;
}

export default function DistrictImage(props: DistrictImageProps) {
  const { imageUrl } = props;

  const districtImg = React.cloneElement(imageUrl as React.ReactElement, {
    height: 213,
  });

  return <div className={styles.container}>{districtImg}</div>;
}
