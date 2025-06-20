import { AppProvider } from "@/app/AppContext";
import { ToastContainer } from "react-toastify";
import LayoutClient from "@/app/LayoutClient";
import { Jost } from "next/font/google";
import "./globals.css";

const jostSans = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jostSans.className} antialiased`}>
        <AppProvider>
          <ToastContainer autoClose={1500} position="top-center" />
          <LayoutClient>{children}</LayoutClient>
        </AppProvider>
      </body>
    </html>
  );
}
