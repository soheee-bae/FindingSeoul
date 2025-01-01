import { SEOUL_DISTRICTS } from "@/data/districts";
import styles from "@/app/home/home.module.scss";
export default function Home() {
  return (
    <div className={styles.root}>
      {SEOUL_DISTRICTS.map((district) => (
        <p key={district}>{district}</p>
      ))}
    </div>
  );
}
