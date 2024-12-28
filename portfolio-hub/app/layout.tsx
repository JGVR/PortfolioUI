import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" rel="stylesheet"/>
      </head>
      <body >
        <NavBar />
        <main className="h-full w-full bg-gradient-to-b from-prussian-blue from-40% to-lapis-lazuli">{children}</main>
      </body>
    </html>
  );
}
