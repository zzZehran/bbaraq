// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import BootstrapInit from "./components/BootstrapInit";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Elite Property Management Inc. | Property Renovation & Management",
  description:
    "Elite Property Management Inc. offers expert residential and commercial renovation and property management services in Kashmir. Transform your home or property with trusted professionals.",
  keywords: [
    "Elite Property Management",
    "property renovation Kashmir",
    "property management Kashmir",
    "home renovation",
    "interior remodeling",
    "real estate services",
    "Srinagar real estate",
  ],
  authors: [{ name: "Zehran Farooq", url: "https://your-portfolio-url.com" }],
  creator: "Zehran Farooq",
  openGraph: {
    title: "Elite Property Management Inc.",
    description:
      "Transform your property with expert renovation and management services from Elite Property Management Inc.",
    url: "https://www.epmkashmir.com",
    siteName: "Elite Property Management",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.epmkashmir.com/hero.jpg", // Replace with a real OG image
        width: 1200,
        height: 630,
        alt: "Elite Properties Management Office",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <BootstrapInit />
        {children}
      </body>
    </html>
  );
}
