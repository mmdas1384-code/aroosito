import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عروسی تو | پلتفرم مدرن برنامه‌ریزی جشن عروسی",
  description: "جامع‌ترین پلتفرم برنامه‌ریزی عروسی، استعلام قیمت آنلاین، چک‌لیست برنامه‌ریزی و راهنمای انتخاب بهترین خدمات‌دهندگان عروسی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-main font-sans selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
