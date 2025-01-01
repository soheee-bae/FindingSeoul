import { SEOUL_DISTRICTS } from "@/data/districts";
import styles from "@/app/home/home.module.scss";
import DistrictContext from "@/contexts/districtsContext";
import { useContext } from "react";

export default function Home() {
  const districtContext = useContext(DistrictContext);
  console.log(districtContext);

  return (
    <div className={styles.root}>
      {SEOUL_DISTRICTS.map((district) => (
        <p key={district}>{district}</p>
      ))}
    </div>
  );
}
