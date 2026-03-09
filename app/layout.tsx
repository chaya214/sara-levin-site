import type { Metadata } from "next";
import { Heebo } from "next/font/google"; // שינוי לפונט תומך עברית
import "./globals.css";
import Navbar from "@/components/Navbar"; // ייבוא רכיב הניווט המשופר
import Footer from "@/components/Footer";

// הגדרת הפונט
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "שרה לוין | ליווי הריון וייעוץ הנקה מקצועי",
  description: "ייעוץ הנקה וליווי אישי לאימהות בגישה רגישה ומקצועית. עוברים מהנקה כואבת לחיבור נינוח וביטחון באימהות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased text-right bg-white`}>

        {/* רכיב הניווט - יופיע בכל דפי האתר */}
        <Navbar />

        {/* תוכן העמוד */}
        <main>
          {children}
        </main>

        <Footer /> {/* 2. הוספה כאן */}      </body>
    </html>
  );
}