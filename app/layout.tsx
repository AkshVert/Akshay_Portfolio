import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Akshay| Python Backend Engineer",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
} 