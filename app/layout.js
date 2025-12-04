import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/global.scss";
import Header from "@/app/(components)/header/Header";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title:
    "Devtrios | Expert Web & App Development, UI/UX Design & Digital Marketing",
  description: "Expert Web & App Development, UI/UX Design & Digital Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
