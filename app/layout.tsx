import "../styles/main.css";
import { Inter, Raleway } from "@/utils/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ProductProvider } from "../context/product";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${Raleway.variable}`}>
        <ProductProvider>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
