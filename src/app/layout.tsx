import TanStackProvider from "@/apis/providers";

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
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
