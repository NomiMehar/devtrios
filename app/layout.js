import { Poppins } from "next/font/google";
import "../styles/global.scss";
import Header from "@/app/(components)/header/Header";
import Footer from "@/app/(components)/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
