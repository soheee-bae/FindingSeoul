import TanStackProvider from "@/apis/providers";
import { Navbar } from "@/components";
import styles from "./layout.module.scss";
import { DistrictContextProvider } from "@/contexts/districtsContext";
import { StationContextProvider } from "@/contexts/stationContext";

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
          <DistrictContextProvider>
            <StationContextProvider>
              <Navbar />
              <div className={styles.children}>{children}</div>
            </StationContextProvider>
          </DistrictContextProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
