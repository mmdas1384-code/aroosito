import type { Metadata } from "next";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "عروسی تو - پلتفرم هوشمند برنامه ریزی عروسی و خدمات مجالس",
  description: "جامع‌ترین پلتفرم برنامه‌ریزی جشن عروسی، استعلام قیمت آنلاین، رزرو تالار، آتلیه و خدمات مجالس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg-custom text-graphite font-vazir">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
