import type { Metadata } from "next";
import "@repo/ui/styles";

export const metadata: Metadata = {
  title: "WayHome",
  description: "Manage WayHome communities with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
