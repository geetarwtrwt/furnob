import NavBar from "@/app/component/NavBar";
import Footer from "@/app/component/Footer";
export default function MainWrapper({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="text-text bg-background">
          <NavBar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
