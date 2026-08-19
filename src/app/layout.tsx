import React from "react";
import "./globals.css";

export const metadata = {
  title: "Dhanush Maddila — Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0B1117] text-white">
        {children}
      </body>
    </html>
  );
}
