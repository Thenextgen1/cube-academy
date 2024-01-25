
import Footer from "./components/BaseLayout/Footer";
import Header from "./components/BaseLayout/Header";
import { AppContextProvider } from "./context/AppContext";
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
