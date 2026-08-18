import React from "react";
import "./globals.css";

export const metadata = {
  title: "Maddila Dhanush Srinivas — Portfolio",
  description: "Full Stack Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0B1117] text-white">
        {children}
      </body>
    </html>
  );
}
