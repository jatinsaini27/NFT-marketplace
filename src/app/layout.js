import "./globals.css";
import { Navbar, Footer } from "@/app/components/componentsindex";
import { NFTMarketplaceProvider } from "../../Context/NFTMarketplaceContext"; // Ensure the path is correct

export const metadata = {
  title: "My App",
  description: "A Next.js 15 application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NFTMarketplaceProvider>
          <Navbar />
          {children} {/* ✅ children only rendered inside the provider */}
          <Footer />
        </NFTMarketplaceProvider>
      </body>
    </html>
  );
}
