import Navbar from "@/components/navbar/navbar";
import styles from "@/app/home/home.module.scss";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
