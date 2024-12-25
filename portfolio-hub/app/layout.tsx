import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        <main className="h-screen w-screen bg-gradient-to-b from-prussian-blue from-40% to-lapis-lazuli">{children}</main>
      </body>
    </html>
  );
}
