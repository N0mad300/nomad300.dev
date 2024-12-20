import { hackFont } from './fonts';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hackFont.variable} >
        {children}
      </body>
    </html>
  );
}
