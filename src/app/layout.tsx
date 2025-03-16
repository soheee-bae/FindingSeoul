import TanStackProvider from "@/apis/providers";
import styles from "./root.module.scss";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "Finding Seoul",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={styles.html}>
      <body className={styles.body}>
        <TanStackProvider>
          <Navbar />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
