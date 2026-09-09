import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Godhe | Python Backend Engineer",
  description:
    "Portfolio of Akshay, a Python Backend Engineer focused on scalable APIs, automation, workflow systems, and production software.",
  keywords: [
    "Python Developer",
    "Python Backend Engineer",
    "Django Developer",
    "Flask Developer",
    "FastAPI",
    "Backend Engineer",
    "Software Engineer",
  ],
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