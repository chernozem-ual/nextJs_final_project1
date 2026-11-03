import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOXPACK — фулфилмент для маркетплейсов",
  description: "Приемка, хранение, сборка и отгрузка заказов на маркетплейсы.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
