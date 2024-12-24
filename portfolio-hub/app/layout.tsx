import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-alice-blue">
        <NavBar />
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
