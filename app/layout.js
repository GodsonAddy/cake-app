import "./globals.css";
import Providers from "./provider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CakeCraft",
  description: "Cake App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={montserrat.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
