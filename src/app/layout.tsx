import TanStackProvider from "@/apis/providers";
import styles from "./root.module.scss";

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
    <html lang="en">
      <body className={styles.body}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
